import path from "path"
import express from "express"
import dotenv from "dotenv"
import connectToMongoDB from "./mongodb/connect.js"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.route.js"
import {app,server} from "./socket/socket.js"


// const app = express()
//configuring dot env files
dotenv.config()
const PORT = process.env.PORT || 5000

const __dirname = path.resolve()


//creating routes for login and log out using middleware
app.use(express.json())
app.use(cookieParser())


app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res) =>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

 
//creating server
server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running PORT ${PORT}`);
})