const http= require ("http");
 
const server=http.createServer((req,res)=>{
     //console.log(req.url);

     if(req.url=="/"){
     res.end("this is home page");
     }
    else if(req.url=="/about"){
        res.end("this is about page")
    }

    else if(req.url=="/contact"){
        res.end("this is contact page")
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>404 error......page does not exists<h1>")
    }

})

server.listen(8000,"127.0.0.1",()=>{
    console.log("listen to port 8000");
})