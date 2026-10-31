import express from "express";
import movieRoutes from "./routes/movieRoutes.js";

const app = express();

app.use(express.json());
app.use("/movies",movieRoutes)

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`)
});