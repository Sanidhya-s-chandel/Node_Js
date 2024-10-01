// HTTP (Hyper Text Transfer Protocal) Module for creating servers in http format, This is the format from which the internet is running

const http = require("http")

let server = http.createServer((req,res) => {
    res.end("The server is running..")
})

server.listen(3000,() => {
    console.log('The server is started');
}) // This code creates a normal server using http

// for handeling different urls

let serverr = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("1st Page")
    }
    else if(req.url === "/About"){
        res.end("2nd Page About")
    }else{
        res.end("404 Not Found")
    }
}).listen(4500,(err)=>{
    if(err) console.log('Can not Display the requested Page');
    else console.log('Server is started at port Localhost:4500');
}) // This code can handel different urls.