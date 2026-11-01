import express from "express";
import {register,login,logout} from "../controllers/authController.js";

const authRoutes = express.Router();

authRoutes.post("/register", register);

authRoutes.get("/login", login);

authRoutes.delete("/logout", logout);



export default authRoutes;