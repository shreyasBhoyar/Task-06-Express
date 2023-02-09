const fs = require('fs')

const readFile =(path)=>{
    return new Promise((res,rej)=>{
    fs.readFile(path,"utf-8",(err,data)=>{
    if(err){
        rej(err)
    }
    res(JSON.parse(data));

})
})
}

module.exports = readFile;