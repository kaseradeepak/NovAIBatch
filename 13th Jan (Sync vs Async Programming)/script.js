console.log("Start")

function test() {
    console.log("Test Function")
}

function sayHello() {
    for(let i = 0; i <= 10000000000; i++) {

    }

    console.log("Hello")
}

function sayBye() {
    console.log("Bye")
}

test(); // Test Function
// sayHello(); // Hello // Synchronous (Blocking) way

setTimeout(sayHello, 2000) // call sayHello function after 2 seconds.

sayBye(); // Bye
console.log("End") // End

// setTimeout(func, delay) => func will be called after the given delay

//1 sec == 1000 milli seconds


/*
 *
 *  const start = performance.now()
 *  func() 
 *  const end = performance.now()
 * 
 *  time take by function = end - start
 */