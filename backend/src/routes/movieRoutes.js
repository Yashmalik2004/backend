import express from "express";
const routes = express.Router();

routes.get("/",(req,res)=>{
  res.json({message: "Welcome to the movie API"});
});

routes.post("/",(req,res)=>{
  if(req.body?.title){
    res.json({message: `added a movie named ${req.body.title}`});
  }
  else{
    res.status(400).json({message: "title is required"});
  }
});

routes.put("/",(req,res)=>{
  res.json({message: "updated a movie"});
});

routes.delete("/",(req,res)=>{
  res.json({message: "deleted a movie"});
});


export default routes;