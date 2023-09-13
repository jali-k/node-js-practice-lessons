const path = require('path')

console.log(path.sep); // The seperator /

//path.join() to join to paths

const textPath = path.join("/mainpath", "//subpath", "text.txt") // What amount of /s but it gives the simplfied path. O/p => \mainpath\subpath\text.txt
console.log(textPath);

console.log(__dirname);

// path.resolve() gives the absolute path(tells)
// use path.basename to get the ending fie name (ending part actually) -> text.txt in the above case

console.log(path.basename(textPath));