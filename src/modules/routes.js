import { Router } from "express";
import { authRoutes } from "./auth/auth.routes.js";

export const routes = Router();

routes.use(authRoutes);