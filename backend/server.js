import express from "express"
import dotenv from "dotenv"
import connectToMongoDB from "./mongodb/connect.js"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.route.js"

const app = express()
//configuring dot env files
dotenv.config()
const PORT = process.env.PORT || 2000


//creating routes for login and log out using middleware
app.use(express.json())
app.use(cookieParser())


app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/users",userRoutes)

app.get('/',(req,res)=>{
    res.send("Hello world ***")
})

 
//creating server
app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running PORT ${PORT}`);
})