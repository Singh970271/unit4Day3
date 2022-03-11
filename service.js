const express=require("express");

const app=express();

app.use(allbooks);

app.get("/books/:name",(req,res)=>{

    res.send({bookname:req.name});


});


function allbooks(req,res,next){
    req.name=req.params.name
    next()
}




app.listen(2500,()=>{
    console.log("app is listening on 2500")

})
