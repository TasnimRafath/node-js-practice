const fs= require("fs");


// fs.mkdir("Assignment", (err)=>{

//     console.log("folder created");

// })


// fs.writeFile("./Assignment/bio.txt", "my name is naaz", (err)=>{
//     console.log("file created");
// })


// fs.appendFile("./Assignment/bio.txt", " mybio.txt " , (err)=>{
//     console.log("file append");
// })


// fs.rename("./Assignment/bio.txt","mybio.txt" , (err)=>{
//     console.log("rename the file name");
// })

// 

// fs.unlink("mybio.txt",(err)=>{
//     console.log("file deleted");
// });

fs.rmdir("./Assignment",(err)=>{
    console.log("folder deleted");
})