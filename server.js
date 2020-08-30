const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const path = require("path");
const expbs = require("express-html");
//app.use('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
mongoose.connect('mongodb://localhost:27017/SIH2020', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var kittySchema = new mongoose.Schema({
  name:String,
  nameOfApplicant: String,
  admin_nameOfApplicant:String,
  email:String,
  password:String,
  gender:String,
  enrollmentNumber:Number,
  dateOfBirth:Date,
  residentialAddress:String,
  college :String,
  branch:String,
  yearOfAdmission:Date,
  loginID:String,
  phoneNumber:Number,
  confirmPassword:String,
  admin_email:String,
  admin_password:String,
  admin_nameOfApplicant:String,
  admin_gender:String,
  admin_dateOfBirth:Date,
  admin_employeeID:Number,
  admin_college:String,
  admin_phoneNumber:Number,
  admin_residentialAddress:String,
  admin_affiliationNumber:Number,
  admin_confirmPassword:String,
  updated_name :String,
  updated_dateOfBirth:Date,
  updated_branch:String,
  updated_phoneNumber:Number,
  updated_email:String,
  levels:String,
  typesOfComplaints:String,
  description:String,
  file:Buffer,


});
var Kitten = mongoose.model('Kitten', kittySchema);
db.once('open', function() {
  console.log("We are connected!!!");
  // we're connected!
});



app.get("/home.html",function(request,response){
response.sendFile(__dirname + "/home.html");
});

app.get("/login.html",function(request,response){
  response.sendFile(__dirname + "/login.html");
});

app.get("/admin_register.html",function(request,response){
  response.sendFile(__dirname + "/admin_register.html");
});

app.get("/student_register.html",function(request,response){
  response.sendFile(__dirname + "/student_register.html");
});

app.get("/grievance.html",function(request,response){
  response.sendFile(__dirname + "/grievance.html");
});

app.get("/complaint.html",function(request,response){
  response.sendFile(__dirname + "/complaint.html");
});

app.get("/admin.html",function(request,response){
  response.sendFile(__dirname + "/admin.html");
});

app.get("/trackstatus.html",function(request,response){
  response.sendFile(__dirname + "/trackstatus.html");
});

app.get("/update.html",function(request,response){
  response.sendFile(__dirname + "/update.html");
});

app.get("/dashboard.html",function(request,response){
  response.sendFile(__dirname + "/dashboard.html");
});

app.get("/admin_login.html",function(request,response){
  response.sendFile(__dirname + "/admin_login.html");
});

app.post("/trackstatus.html",function(req,res){
 var email = req.body.email;
 var password = req.body.password;
 res.sendFile(__dirname + "/trackstatus.html")
});

app.post("/login.html",function(req,res){
 var email = req.body.email;
 var password = req.body.password;
 var nameOfApplicant = req.body.nameOfApplicant;
 var gender = req.body.gender;
 var dateOfBirth = req.body.dateOfBirth;
 var enrollmentNumber = req.body.enrollmentNumber;
 var branch = req.body.branch;
 var college = req.body.college;
 var yearOfAdmission = req.body.yearOfAdmission;
 var phoneNumber = req.body.phoneNumber;
 var residentialAddress = req.body.residentialAddress;
 var loginID = req.body.loginID;
 var confirmPassword = req.body.confirmPassword;


   var kitty = new Kitten({

     email:email,
     password:password,
     nameOfApplicant:nameOfApplicant,
     gender:gender,
     dateOfBirth:dateOfBirth,
     enrollmentNumber:enrollmentNumber,
     branch:branch,
     college:college,
     yearOfAdmission:yearOfAdmission,
     phoneNumber:phoneNumber,
     residentialAddress:residentialAddress,
     loginID:loginID,
     confirmPassword:confirmPassword,




   });
   kitty.save();

 res.sendFile(__dirname + "/login.html");
 console.log(email + " " + nameOfApplicant);
});

app.post("/dashboard.html",function(req,res){
  var email = req.body.email;
  var password = req.body.password;
  var kitty2 = new Kitten({
    email:email,
    password:password,
  });
  kitty2.save();
  res.sendFile(__dirname + "/dashboard.html");
  console.log(email + " " +password);
});

app.post("/admin.html",function(req,res){
  var admin_email = req.body.email;
  var admin_password = req.body.password;
  var kitty3 = new Kitten({
    admin_email:admin_email,
    admin_password:admin_password,
  });
  kitty3.save();
  res.sendFile(__dirname + "/admin.html");
  console.log(admin_email + " " +admin_password);
});

app.post("/admin_login.html",function(req,res){
  var admin_email = req.body.email;
  var admin_password = req.body.password;
  var admin_nameOfApplicant = req.body.nameOfApplicant;
  var admin_gender = req.body.gender;
  var admin_dateOfBirth = req.body.dateOfBirth;
  var admin_employeeID = req.body.employeeID;

  var admin_college = req.body.college;

  var admin_phoneNumber = req.body.phoneNumber;
  var admin_residentialAddress = req.body.residentialAddress;
  var admin_affiliationNumber = req.body.affiliationNumber;
  var admin_confirmPassword = req.body.confirmPassword;
  var kitty4 = new Kitten({
    admin_email:admin_email,
    admin_password:admin_password,

    admin_nameOfApplicant:admin_nameOfApplicant,
    admin_gender:admin_gender,
    admin_dateOfBirth:admin_dateOfBirth,
    admin_employeeID:admin_employeeID,
    admin_college:admin_college,
    admin_phoneNumber:admin_phoneNumber,
    admin_residentialAddress:admin_residentialAddress,
    admin_affiliationNumber:admin_affiliationNumber,
    admin_confirmPassword:admin_confirmPassword,
  });
  kitty4.save();
  res.sendFile(__dirname + "/admin_login.html");
  console.log(admin_email + " " + admin_nameOfApplicant);

});

app.post("/home.html",function(req,res){
var updated_name = req.body.name;
var updated_dateOfBirth = req.body.dateOfBirth;
var updated_branch = req.body.branch;
var updated_phoneNumber = req.body.phoneNumber;
var updated_email = req.body.email;
var kitty5 = new Kitten({
  updated_name:updated_name,
  updated_dateOfBirth:updated_dateOfBirth,
  updated_branch:updated_branch,
  updated_phoneNumber:updated_phoneNumber,
  updated_email:updated_email,
});
kitty5.save();
res.sendFile(__dirname + "/home.html") ;
console.log(updated_email);
});
app.post("/home.html" + function(req,res){
  var levels = req.body.levels;
  var typesOfComplaints = req.body.typesOfComplaints;
  var description = req.body.description;
  var file = req.body.file;
  if(req.body.file===""){
    alert("Proof is compulsory for submission!");
    res.sendFile(__dirname + "/dashboard.html");
  };
var kitty6 = new Kitten({
  levels:levels,
  typesOfComplaints:typesOfComplaints,
  description:description,
  file:file,

});

kitty6.save();

  res.sendFile(__dirname + "/home.html");
  console.log(description);
});


app.listen(process.env.PORT||3000,function(){
  console.log("Server started on port 3000");
});
