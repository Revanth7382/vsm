const express = require('express')
const cors = require('cors') 
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')

//DOTENV
dotenv.config()

//MONGODB CONNECTION
connectDB();
//REST OBJECT
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//ROUTES
app.get('',(req,res) => {
    res.status(200).json({
        success:true,
        message: "Welcome to vsm",
    });
});

//PORT
const PORT = process.env.PORT || 8080

//Listen
app.listen(PORT,()=> {
    console.log(`server Running ${PORT}`.bgGreen.white);
});