import { Request, Response } from "express"
import authService from "@services/auth.service"
import checkError from "@lib/checkError"

class AuthController {
    async registration(req: Request, res: Response) {
        try {
            const createdUser = await authService.registration(req.body)

            res.cookie("refreshToken", createdUser.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            })
            res.json(createdUser)
        } catch (e) {
            res.status(401).json({ message: checkError(e) })
        }
    }

    async login(req: Request, res: Response) {
        try {
            const user = await authService.login(req.body)
            res.cookie("refreshToken", user.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            })
            res.json(user)
        } catch (e) {
            res.status(401).json({ message: checkError(e) })
        }
    }

    async resetPassword(req: Request, res: Response) {
        try {
            const { resetToken } = req.cookies
            const { id } = req.params
            const { password, confirmPassword } = req.body
            await authService.resetPassword(
                id,
                resetToken,
                password,
                confirmPassword
            )
            res.json(resetToken)
        } catch (e) {
            res.status(401).json({ message: checkError(e) })
        }
    }

    async reset(req: Request, res: Response) {
        try {
            const resetToken = await authService.reset(req.body.email)
            res.cookie("resetToken", resetToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            })
            res.json(resetToken)
        } catch (e) {
            res.status(401).json({ message: checkError(e) })
        }
    }

    async logout(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const token = await authService.logout(refreshToken)
            res.clearCookie("refreshToken")
            return res.json(token)
        } catch (e) {
            res.status(401).json({ message: checkError(e) })
        }
    }

    async refresh(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const userData = await authService.refresh(refreshToken)
            res.cookie("refreshToken", userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            }) // 30d for refresh in cookie
            return res.json(userData)
        } catch (e) {
            res.status(401).json({ message: checkError(e) })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const updatedUserInfo = await authService.update(
                refreshToken,
                req.body.address,
                req.body.phone
            )
            return res.json(updatedUserInfo)
        } catch (e) {
            res.status(401).json({ message: checkError(e) })
        }
    }
}

export default new AuthController()
