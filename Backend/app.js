const express=require('express')
const app=new express();
const morgan=require('morgan')
app.use(morgan('dev'))
const colors=require('colors')
const cors=require('cors')
app.use(cors())
app.use(express.json());
require('dotenv').config();
const PORT=process.env.PORT
require('./db/connection');

// app.get( "/", (req, res) => {
//     res.status(200).json({
//          message:"Welcome to user", })
//     })

// app.use("/user",user_route)
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

app.get( "/", (req, res) => {res.send( "Hello World!" );});
// app.get( "/", (req, res) => {res.send( "Hello World!" );});

app.listen(PORT,()=>{
    console.log(`server is running on the PORT ${PORT}`)
})



