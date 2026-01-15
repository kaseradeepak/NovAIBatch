//To create a promise, we call the PromiseConstructor.
let myPromise = new Promise(function(resolve, reject){
    setTimeout(function() {
        let condition = Math.random() >= 0.5 // returns a random value between 0 & 1

        if(condition) { // Win -> resolved.
            resolve("We Won!!!")
        } else { // Loose -> rejected.
            reject("We Lost!!!")
        }
    }, 1000)  
})

console.log(myPromise)

//Promise Handling

//then - Fulfilled / Resolved.
myPromise.then(function(output){
    console.log(output)
}) 

//catch - Rejected / Failed
myPromise.catch(function(failedOutput) {
    console.log(failedOutput)
})

myPromise.finally(function() {
    console.log("Settled")
})