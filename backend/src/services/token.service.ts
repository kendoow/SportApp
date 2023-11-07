import jsonwebtoken from "jsonwebtoken"
import pool from "index"
import { IJwtPayload } from "@interfaces/auth.interface"

class TokenService {
    create(email: string, id: string) {
        const accessToken = jsonwebtoken.sign(
            { email, id },
			process.env.SECRET_ACCESS_TOKEN as string,
			{ expiresIn: "1h" }
        )
        const refreshToken = jsonwebtoken.sign(
            { email, id },
			process.env.SECRET_REFRESH_TOKEN as string,
			{ expiresIn: "30d" }
        )
        return {
            accessToken,
            refreshToken,
        }
    }

    createReset(email: string, id: string) {
        const resetToken = jsonwebtoken.sign(
            { email, id },
			process.env.SECRET_RESET_TOKEN as string,
			{ expiresIn: "15m" }
        )
        return resetToken
    }

    async getWithUserId(userId: number) {
        try {
            const refreshToken = await pool.query(
                "SELECT refreshtoken FROM tokens \n\
            WHERE token_id = $1",
                [userId]
            )
            return refreshToken.rows[0]
        } catch (e) {
            throw e
        }
    }
    async save(userId: string, refreshToken: string) {
        await pool.query(
            "INSERT INTO tokens(token_id,refreshtoken) values ($1, $2) RETURNING *",
            [userId, refreshToken]
        )
    }

    async delete(refreshToken: string) {
        await pool.query("DELETE FROM tokens where refreshToken = $1", [
            refreshToken,
        ])
    }

    async exist(userId: string) {
        const exists = await pool.query(
            "SELECT * FROM tokens where token_id = $1",
            [userId]
        )

        return exists?.rows[0]?.refreshtoken
    }

    async update(userId: number, refreshToken: string) {
        try {
            const refreshTokenUpdated = await pool.query(
                "UPDATE tokens SET refreshtoken = $1 WHERE token_id = $2",
                [refreshToken, userId]
            )
            return refreshTokenUpdated
        } catch (e) {
            throw e
        }
    }

    async findToken(refreshToken: string) {
        const tokenData = await pool.query(
            "SELECT * FROM tokens where refreshtoken = $1",
            [refreshToken]
        )
        return tokenData
    }

    validResetToken(resetToken: string) {
        const resetPayload = jsonwebtoken.verify(
            resetToken,
			process.env.SECRET_RESET_TOKEN as string
        )
        return resetPayload as IJwtPayload
    }

    validRefreshToken(refreshToken: string) {
        const jwtPayload = jsonwebtoken.verify(
            refreshToken,
			process.env.SECRET_REFRESH_TOKEN as string
        )
        return jwtPayload as IJwtPayload
    }
}

export default new TokenService()
