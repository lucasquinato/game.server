import { Router } from "express";

import { userRegister } from "./controllers/register.controller.js";

export const authRoutes = Router();

authRoutes.post(["/register/"], userRegister);