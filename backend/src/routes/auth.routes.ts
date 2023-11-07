import authController from '@controllers/auth.controller'
import { Router } from "express"
import { body } from "express-validator"

const authRouter = Router()

authRouter.post(
    "/signup",
    body("email").isEmail(),
    body("password").isLength({ min: 3, max: 32 }),
    authController.registration
)
authRouter.post(
    "/login",
    body("email").isEmail(),
    body("password").isLength({ min: 3, max: 32 }),
    authController.login
)
authRouter.post("/logout", authController.logout)
authRouter.post("/reset", authController.reset) // full user reset
authRouter.post("/reset/:id", authController.resetPassword)  
// authRouter.get("/reset/:id", authController.resetPassword);  
authRouter.get("/refresh", authController.refresh)
authRouter.put("/update", authController.update)

export default authRouter