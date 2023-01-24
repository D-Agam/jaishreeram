const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const mysql = require('mysql');
app.use(bodyParser.urlencoded({extended:true}));

app.use('/index1.css',express.static(__dirname +'/index1.css'));
app.get("/",function(req,res)
{
  res.sendFile(__dirname+"/index.html")
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'CR7'
  });

  connection.connect(function(err)
  {
    if(err) throw err;

    console.log('Connected');
  })

app.post("/",function(req,res)
{
    const teamname=req.body.team_name;

    const name=req.body.name;
    const  rollno=req.body.rollno;
    const email=req.body.email;
    const phonenumber=req.body.phno;

    const name1=req.body.name1;
    const  roll_no1=req.body.roll_no1;
    const email1=req.body.email1;
    const phonenumber1=req.body.phno1;

    const name2=req.body.name2;
    const  roll_no2=req.body.roll_no2;
    const email2=req.body.email2;
    const phonenumber2=req.body.phno2;

    const name3=req.body.name3;
    const  roll_no3=req.body.roll_no3;
    const email3=req.body.email3;
    const phonenumber3=req.body.phno3;

    var sql="insert into student values('"+teamname+"','"+name+"','"+rollno+"','"+email+"','"+phonenumber+"','"+name1+"','"+roll_no1+"','"+email1+"','"+phonenumber1+"','"+name2+"','"+roll_no2+"','"+email2+"','"+phonenumber2+"','"+name3+"','"+roll_no3+"','"+email3+"','"+phonenumber3+"')";

    connection.query(sql, (err) => {
        if (err) throw err
      })
    res.send("Thanks for Registering");
    connection.end();
});


app.listen(3000,function()
{
    console.log("Server runned");
});