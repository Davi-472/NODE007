import { Router } from "express";
import { login } from "../controller/authController.js";

const authRoute = Router()
authRoute.post('/login',login)

export default authRoute