console.log("ejecutando script")


let username = "Bob";
let age = 27;

//* sintaxis ES5
// module.exports = {
//   username: username,
//   age: age
// }

//* sintaxis ES6
export default {
  username: username,
  age: age
}

// module.exports = age // node no permite exportar multiples cosas en diferentes lineas