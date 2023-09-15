// We are getting requests.
// When we get a time consuming request eventloop will assign a callback to execute after that request is processed.
// But even if that task is completed early, the system will execute that callback only after all the imidiat tasks are being executed.

console.log("Doing immediate task 1");
setTimeout(()=>{
    console.log("Long process done immediately");
}, 0)
console.log("Doing immediate task 2");