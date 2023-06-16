const express = require('express')
const path = require("path");
// const dotenv = require('dotenv').config()
// const port = process.env.PORT || 5000
const app = express()
const publicPath = path.join(__dirname,"public")

// app.use('/api/goals', require('./routes/goalRoutes'))
// app.listen(port, ()=> console.log(`Server is running on port ${port}`)) 

// app.get('',(req,res)=>{
//     console.log("Data Send from Browser ===> ", req.query.name)
//     res.send(
//         `<h1>Hello, This is Home Page</h1>
//         <a href="/about">Go to About Page </a>`
//         );

// })

// app.get('/about',(req,res)=>{
//     res.send("Hello, This is About Page");
// })
app.use(express.static(publicPath))
app.listen(5000);
