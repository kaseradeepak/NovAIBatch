const myExpress = require("express")

const expressServer = myExpress() // creates a application / server.

expressServer.get('/', (req, res) => {
    res.send("Hello from our Express Server.")
})

expressServer.get('/contact', (req, res) => {
    res.send("Contact Us.")
})


expressServer.listen(8001, () => {
})


//Single Responsibility Principle 