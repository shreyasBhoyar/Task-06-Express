const fs = require('fs')

const writeFile =(path,data)=>{
    return new Promise((res,rej)=>{
    fs.writeFile(path,data,"utf-8",(err,data)=>{
    if(err){
        rej(err)
    }
    res(data);

})
})
}

module.exports = writeFile;