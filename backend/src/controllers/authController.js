import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

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
  // if i want the user to get automatically logged in right after they register. Then I can generate a token after they register. 
  const token = generateToken(user.id, res); 
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

//LOGIN LOGIC
const login = async (req, res) => {
  const body = req.body;
  const {email, password} = body ?? {};
  const checkUserExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!checkUserExists) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  else{

    //verify the password
    const isPasswordValid = await bcrypt.compare(password, checkUserExists.password);
    if(!isPasswordValid){
      return res.status(401).json({
        message: "Invalid email or password"
      })
    }
    else{

      //generate the token and send it to the user
      const token = generateToken(checkUserExists.id, res);
      return res.status(200).json({
        message: "user logged in successfully",
        data: {
          user: {
            id: checkUserExists.id,
            email: checkUserExists.email,
          },
        },
      });
    }
  }
};


//LOGOUT LOGIC
const logout = async (req, res) => {
  res.cookie("token","",{
    httpOnly: true,
    expires: new Date(0)
  });
  res.status(201).json({ message: "user logged out successfully" });
};

export { register, login, logout };
