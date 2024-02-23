const express = require("express");
const app = express();
const dotenv= require("dotenv");
dotenv.config();
const connectDataBase= require("./config/db");
const bodyParser= require("body-parser");
const cors= require("cors");
const user=require("./routes/userRoutes");
const employee= require("./routes/EmployeeRoutes");
connectDataBase();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use("/api/v1/user",user);
app.use("/api/v1/employee",employee);



app.listen(4000,(err)=>{
    if(err)
        console.log(err)
console.log("Connected to Sever on port 4000");
})

