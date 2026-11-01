import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";

//REGISTER LOGIC
const register = async (req, res) => {
  const body = req.body;
  const { email, password, name } = body ?? {};
  if (
    typeof email === "string" &&
    typeof password === "string" &&
    typeof name === "string" &&
    email &&
    password &&
    name
  ) {

  //check if user already exists
  const checkUserExists = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (checkUserExists) {
    return res.status(400).json({ message: "user already exists" });
  }
    
  //hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password,salt);

  //create a new user
  const user = await prisma.user.create({
    data:{
      name,
      email,
      password: hashedPassword
    }
  });
  res
    .status(201)
    .json({
      status: "success",
      data: {
        user: {
          id: user.id,
          name: name,
          email: email,
        },
      },
    });
  } else {
    res.status(400).json({
      message: "email, password, and name must be non-empty strings",
    });
  }
};
const login = async (req, res) => {
  res.json({ message: "user logged in successfully" });
};
const logout = async (req, res) => {
  res.json({ message: "user logged out successfully" });
};

export { register, login, logout };
