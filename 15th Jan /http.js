const http = require("http");

const myServer = http.createServer((req, res) => {
    // res.end("Welcome to my Server.")

    console.log(req)

    if(req.url == "/") {
        res.end("Hello from our Http Server.")
    } else if (req.url == "/hire-from-us") {
        res.end("Hire from us.")
    } else if (req.url == "/contact" && req.method == "GET") {
        res.end("GET method & Contact Us.")
    } else if (req.url == "/contact" && req.method == "POST") {
        res.end("POST method & Contact Us.")
    } else {
        res.end("Page not found!")
    }
})

//Port number
myServer.listen(8000, () => {
    
})

//Nodemon 
//Install nodemon - npm install -g nodemon
//To use nodemon - npx nodemon <filename>


//npm - node package manager
