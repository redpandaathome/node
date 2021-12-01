const fs = require('fs');

// 3 ways
// rename(..., callback(error, data))
// try { renameSync(...) } catch(err){} 💩
// promises.rename().then().catch(0)

//Sync... -> avoid
try{
   fs.renameSync('./file.txt', './file-new.txt');
}catch(err){
   console.error(err)
}
console.log("program still alive...!")

//Async... duuno which one will start first between fs.rename &fs.promises.~
fs.rename('./file-new.txt', './file.txt', (err)=>{
   console.error(err)
})

console.log("hello")

fs.promises
   .rename('./file2.txt', './file2-new.txt')
   .then(()=>console.log("DONE"))
   // .catch((err)=>console.error(err))
   // ✨✨✨✨✨
   .catch(console.error)