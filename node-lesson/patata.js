console.log("ejecutando javascript desde node")


let someVar = 10;
someVar += 40

// yo quiero ejecutar todo el codigo que hay en script.js

//* sintaxis ES5
// const variableEnScript = require("./script.js") // ejecuta el código de script, en su propio scope.

//* sintaxis ES6
import variableEnScript from "./script.js"

console.log(variableEnScript)

console.log(someVar)

