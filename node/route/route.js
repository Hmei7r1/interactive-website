const http = require("http")
const fs = require("fs")

// requirement

const port = 4000;
const hostname = "127.0.0.1";

// create Content-Type 

const extention = {
    ".html": {"Content-Type":"text/html"},
    ".css": {"Content-Type":"text/css"},
    ".js": {"Content-Type":"application/javascript"},
}

// create connection server
const server = http.createServer((req, res) => {

    const rootPage = fs.readFile("../../" + req.url);

    for(let ext in extention){
        console.log(extention.ext)
    }

});

server.listen(port, hostname, () => {
    console.log(`server berjalan di http://${hostname}:${port}`);
})