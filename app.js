const express= require('express');
const path = require('path');
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser')
const mongoose =require("mongoose");
const app=express();
var mongodb = require('mongodb');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const alert = require('alert');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
global.document = new JSDOM("html").window.document;



app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));



mongoose.connect('mongodb://127.0.0.1:27017/test');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})


const userSchema = new mongoose.Schema({
    phone: String,
    email:String
  });
  const User = mongoose.model('User', userSchema);

//new user
app.post('/sign_up', async(req,res)=>{
    var name = req.body.name;
    var email =req.body.email;
    var pass = req.body.pass;
    var phone =req.body.phone;
  
    try {
        const userExist = await db.collection('details').findOne({ email: email }, {phone: phone });
        if (userExist)
        {
          return  res.send("<script>alert('user exist'); window.location.href = '/signup.html';</script> ");
        }
    }
        catch (err) {
            console.log(err);
            
      }
    var data = {
        "name": name,
        "email":email,
        "password":pass,
        "phone":phone
    }
    
db.collection('details').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
              
    });
          
    return res.redirect('login.html');
});


app.get("/RegisterPage.html",(req,res)=>
{
    res.sendFile(path.join(__dirname,'RegisterPage.html'));
})

app.post('/login',async(req,res)=>
{
 try{
    const email =req.body.email;
    const password = req.body.password;

    const useremail = await db.collection("details").findOne({email:email});
   
    if(useremail.password==password)
    {
        
    
     res.redirect('index.html');
    }
    else{
        return res.send("<script>alert('Sorry , Wrong Password !');window.location.href = '/login.html';</script>");
    }



}catch(err)
{
    res.status(400).send("invalid hai");
}
});

app.get("/login.html",(req,res)=>
{
    res.sendFile(path.join(__dirname,'login.html'));
})
app.get("/index.html",(req,res)=>
{
    res.sendFile(path.join(__dirname,'index.html'));
})
app.get("/Mobile.html",(req,res)=>
{
    res.sendFile(path.join(__dirname,'Mobile.html'));
})
app.get("/Laptop.html",(req,res)=>
{
    res.sendFile(path.join(__dirname,'Laptop.html'));
})
app.get("/Books.html",(req,res)=>
{
    res.sendFile(path.join(__dirname,'Books.html'));
})
app.get("/Watches.html",(req,res)=>
{
    res.sendFile(path.join(__dirname,'Watches.html'));
})
app.get("/ReisterPage.html",(req,res)=>
{
    res.sendFile(path.join(__dirname,'Register.html'));
})


app.get("/FrontPage.html",(req,res)=>
{
    res.sendFile(path.join(__dirname,'FrontPage.html'));
})

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
