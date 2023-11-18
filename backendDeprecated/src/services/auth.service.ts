import { hashSync, compareSync } from "bcrypt"
import { IJwtPayload, IUser } from "./../interfaces/auth.interface"
import pool from "index"
import tokenService from "./token.service"
import { ApiError } from "@lib/apiError"

class AuthService {
    async registration(user: IUser) {
        try {
            const userConfirmed = await pool.query(
                "SELECT * FROM user_account where email = $1",
                [user.email]
            )
            if (userConfirmed.rows[0]) {
                throw ApiError.BadRequest(
                    `User with adress ${user.email} already exists `
                )
            }
            const hashPassword = hashSync(user.password, 3)
            const createdUser = await pool.query(
                "INSERT INTO user_account(name, email, password) values ($1,$2, $3) RETURNING *",
                [user.name, user.email, hashPassword]
            )
            const tokens = tokenService.create(
                String(createdUser.rows[0].id),
                createdUser.rows[0].email
            )

            await tokenService.save(
                String(createdUser.rows[0].id),
                tokens.refreshToken
            )

            return { ...tokens, user: createdUser.rows[0] }
        } catch (e) {
            throw e
        }
    }

    async login(user: IUser) {
        try {
            const userConfirmed = await pool.query(
                "SELECT * FROM user_account where email = $1",
                [user.email]
            )
            if (!user || userConfirmed?.rows[0] == undefined) {
                throw ApiError.BadRequest("User not found")
            }
            const isPassedEquals = compareSync(
                user.password,
				userConfirmed?.rows[0].password as string
            )

            if (!isPassedEquals) {
                throw ApiError.BadRequest("Incorrect password")
            }
            const refreshToken = await tokenService.exist(
                userConfirmed?.rows[0].id
            )

            if (!!refreshToken) {
                tokenService.delete(refreshToken)
            }

            const tokens = tokenService.create(
                user.email,
				userConfirmed?.rows[0].id as string
            )

            if (await tokenService.getWithUserId(userConfirmed?.rows[0].id)) {
                await tokenService.update(
                    userConfirmed?.rows[0].id,
                    tokens.refreshToken
                )
            } else {
                await tokenService.save(
                    String(userConfirmed?.rows[0].id),
                    tokens.refreshToken
                )
            }

            return {
                user: userConfirmed.rows[0],
                ...tokens,
            }
        } catch (e) {
            throw e
        }
    }

    async resetPassword(
        id: string,
        token: string,
        password: string,
        passwordConfirm: string
    ) {
        try {
            if (
                tokenService.validResetToken(token) &&
				password === passwordConfirm
            ) {
                const hashPassword = hashSync(password, 3)
                const UserPasswordUpdated = await pool.query(
                    "UPDATE user_account SET password = $1 WHERE id = $2 RETURNING *",
                    [hashPassword, id]
                )

                return UserPasswordUpdated.rows[0]
            }
        } catch (e) {
            throw e
        }
    }

    async reset(email: string) {
        try {
            const DBuser = await (
                await pool.query(
                    "SELECT * FROM user_account where email = $1",
                    [email]
                )
            ).rows[0]

            if (email !== DBuser.email) {
                throw new Error("Incorrect data")
            }

            // 15 min valid Link

            const ResetToken = tokenService.createReset(
                DBuser.email,
                DBuser.id
            )

            return ResetToken
        } catch (e) {
            throw e
        }
    }

    async logout(refreshToken: string) {
        if (!refreshToken) {
            throw new Error("RefreshToken doesn't exist")
        }
        const token = await tokenService.delete(refreshToken)
        return token
    }

    async check(refreshToken: string) {
        try {
            if (!refreshToken) {
                throw new Error("RefreshToken doesn't exist")
            }
            const jwtPayload: IJwtPayload =
				tokenService.validRefreshToken(refreshToken)
            const userConfirm = await pool.query(
                "SELECT * FROM user_account where id = $1",
                [jwtPayload.id]
            )
            if (!userConfirm) {
                throw ApiError.UnauthorizedError()
            }
            return userConfirm.rows[0]
        } catch (e) {
            throw e
        }
    }

    async refresh(refreshToken: string) {
        try {
            if (!refreshToken) {
                throw ApiError.UnauthorizedError()
            }
            const userData = tokenService.validRefreshToken(refreshToken)
            const tokenFromDb = await tokenService.findToken(refreshToken)

            if (!userData || !tokenFromDb) {
                throw ApiError.UnauthorizedError()
            }

            const user = await pool.query(
                "SELECT * FROM user_account where id = $1",
                [userData.id]
            )
            const tokens = tokenService.create(
				user?.rows[0].email as string,
				String(user?.rows[0].id)
            )
            await tokenService.save(
                String(user?.rows[0].id),
                tokens.refreshToken
            )
            return {
                user: user.rows[0],
                ...tokens,
            }
        } catch (e) {
            throw e
        }
    }

    async update(refreshToken: string, address: string, phone: string) {
        try {
            const user = await this.check(refreshToken)
            const PersonalInfo = await pool.query(
                "UPDATE user_account SET address = $1 , phone = $2 WHERE id = $3 RETURNING *",
                [address, phone, user.id]
            )
            return PersonalInfo.rows[0]
        } catch (e) {
            throw e
        }
    }
}

export default new AuthService()
