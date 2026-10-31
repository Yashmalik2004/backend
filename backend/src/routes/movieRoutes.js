

app.get("/",(req,res)=>{
  res.json({message: "Welcome to the backend server!"})
});

app.get("/health",(req,res) => {
  res.json({status: "UP"});
});