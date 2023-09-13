const os = require('os') // no ./

console.log(os.userInfo()); // getting user info

console.log(os.uptime()); // cpu up time

console.log({
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),

});