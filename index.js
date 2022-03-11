const express=require("express");

const app=express();

app.use(allbooks);

app.get("/books",(req,res)=>{
    console.log("hello")
    res.send("Hello");
})

function allbooks(req,res,next){
    console.log("Fetching all book");

    next();

}


app.listen(2000,()=>{
    console.log("app is listening on port 2000")

})