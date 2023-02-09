const express = require("express")
const userRoute = require('../src/routes/users.routes')
const app = express();

app.use(express.json())

app.use("/users",userRoute)

app.listen(3000,()=>{
    console.log("Server started on port 3000")
})