const readFile = require("../../helpers/readJSON");
const sendResponse = require("../../helpers/sendResponse");
const writeFile = require("../../helpers/writeJSON");
const User = require("../models/User.model");

 const getAllUsers = (req,res)=>{
    readFile("../data/users.json").then((data)=>{
        return sendResponse(req,res,{
            statusCode:200,
            message : "Successful",
            payload : data
        })
        }).catch((err)=>{
            return res.status(404).json({
                message : "Data not found",
            })
        })
    }

const getUserById = (req,res)=>{
    const {params:{id}} = req;
    readFile("../data/users.json").then((data)=>{
        const Users = [...data]
        const user = Users.find((user)=> user.id===id)
       if(user){
        return sendResponse(req,res,{
            statusCode:200,
            message : "Request executed successfully",
            payload : user
        })
       }else{
        return res.status(404).json({
            message : "User not found",
        })
       }
    }).catch((err)=>{
        return res.status(404).json({
            message : "Error in reading file",
        })
    })
   
}

const ValidateUser = (req,res,next)=>{
    const {body} = req;
    validKeys = ["id","name","profileLink","introduction","profileImage"]

    const result = validKeys.every((key)=>Object.keys(body).includes(key))
    if (!result){
        return res.status(422).json({
            message : "Invalid data"
        })
    }
   return next();
}

const createUser = (req,res)=>{
    const {body} = req;
    readFile("../data/users.json").then((data)=>{   
        const Users = [...data]
        const newUser = new User(body);
        Users.push(newUser)
        writeFile("../data/users.json",JSON.stringify(Users)).then(()=>{
          return  sendResponse(req,res,{message:"User added",payload:{...newUser}})
        })
    }).catch((err)=>{
        return res.status(404).json({
            message : "Error in accessing file",
        })
    })
}

const UpdateUser = (req,res)=>{
    const {params:{id}} = req;
    const {body} = req;
    readFile("../data/users.json").then((data)=>{   
        const Users = [...data]
    const user = Users.find((user)=> user.id===id)
    const newUser = {...user}
    if(user){
    for(key in body){
        newUser[key]=body[key]
    }
    Users[Users.indexOf(user)] = newUser
    writeFile("../data/users.json",JSON.stringify(Users)).then(()=>{
        return  sendResponse(req,res,{message:"User updated",payload:{...newUser}})
      })
}
    }).catch((err)=>{
        return res.status(404).json({
            message : "Error in reading file",
        })
    })

}

const deleteUser = (req,res)=>{
    const {params:{id}} = req;
    readFile("../data/users.json").then((data)=>{   
        const Users = [...data]
    const user = Users.find((user)=> user.id===id)
    if (user){
    const remainingUsers = Users.filter(function(singleUser) {
            return singleUser !== user
        })
        writeFile("../data/users.json",JSON.stringify(remainingUsers)).then(()=>{
            return  sendResponse(req,res,{message:"User Deleted",payload:{...user}})
          })
    }else{
        res.status(404).json({
            message : "User not found"
        })
    }
}).catch((err)=>{
    return res.status(404).json({
        message : "Error in reading file",
    })
})
}
module.exports = {getAllUsers,getUserById,createUser,deleteUser,UpdateUser,ValidateUser};