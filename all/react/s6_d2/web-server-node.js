let http = require("http");
var open = require("open");
let hostname = "127.0.0.1";
var port = 3000;

let server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello World</h1>");
});

server.listen(port, hostname, ()=>{
    open("http://" + hostname + ":" + port + "/");
    console.log("Server running at http://" + hostname + ":" + port + "/");
})

