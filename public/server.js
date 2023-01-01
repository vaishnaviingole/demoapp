var express=require ("express")
var http=require("http")
var app=express();

app.get("/",function(req,resp){
  resp.send("HELLO WORLD");
})
app.get("/home",function(req,resp){
    resp.send("inside home");
  })
  app.get("/url",function(req,resp){
    resp.send("inside url");
  })
app.listen(4000,function(){
    console.log("running on port 4000")
})