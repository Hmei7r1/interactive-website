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

    //const rootPage = fs.readFile("../..", req.url)

    // mencari ext berdasarkan req.url 

    for (const ext in extention){

        if(req.url.endsWith(ext)){


            fs.readFile("../../" + req.url, (err, index) => {
                if (err){
                    res.writeHead(404, {"Content-Type":"text/html"});
                    res.end("not found page")
                    return;
                }

                res.writeHead(200, extention[ext])
                res.write(index)
                res.end()
            })
            

        }else{
            console.log("error")
        }

    }

}).listen(3000)