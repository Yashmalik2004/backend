import express from "express";
import {config} from "dotenv";
import movieRoutes from "./routes/movieRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import {connectDb,disconnectDb} from "./config/db.js";

const app = express();

config(); // Load environment variables from .env file
connectDb(); // Connect to the database

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/movies",movieRoutes)
app.use("/auth",authRoutes)

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`)
});

process.on("unhandledRejection", (err)=>{
  console.log(`db error agya: ${err.message}`);
  server.close(async()=>{
    await disconnectDb();
    process.exit(1);
  });
});

process.on("uncaughtException,", async (err)=>{
  console.log(`exceptional error agya: ${err.message}`);
  await disconnectDb();
  process.exit(1);
});

process.on("SIGTERM", ()=>{
  console.log("SIGTERM received, shutting down gracefully");
  server.close(async()=>{
    await disconnectDb();
    process.exit(0);
  });
});