const fileSystem = require("fs")


//Asyncshronous reading of file1 data
// fileSystem.readFile("f1.txt", (error, data) => {
//     if(error) {
//         console.log("Some error while reading the file")
//     }

//     console.log(data)
// })

console.log("start")

let data1 = fileSystem.readFileSync("f1.txt") // Blocking call

console.log("File-1 -> " + data1)
 
let data2 = fileSystem.readFileSync("f2.txt") // Blocking call

console.log("File-2 -> " + data2)

let data3 = fileSystem.readFileSync("f3.txt") // Blocking call

console.log("File-3 -> " + data3)

console.log("end")
