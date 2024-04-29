console.log("ejecutando codigo de react")

//* con los scripts de react en el html, tenemos acceso de React y ReactDOM

const myPageNode = document.querySelector("#root")
const root = ReactDOM.createRoot(myPageNode) // aqui se genera el dom virtual


// let username = "Jorge"

// const someDiv = React.createElement("div", {
//   children: [
//     React.createElement("h3", {
//       children: `Hola mundo de React, mi nombre es ${username}`
//     }),
//     React.createElement("p", {
//       children: "bienvenidos a mi pagina"
//     }),
//     React.createElement("p", {
//       children: `La fecha de hoy es: ${new Date().toDateString()}`
//     })
//   ]
// })

// ej JS existe una sintaxis especial llamada JSX => mezcla de html y js
// const someDiv = (
//   <div>
//     <h3>Hola mundo de React, mi nombre es {username}</h3>
//     <p>bienvenidos a mi pagina</p>
//     <p>La fecha de hoy es: {new Date().toDateString()}</p>
//     <p>patata</p>
//   </div>
// )


//* Componente => una funcion que ejecuta algo y devuelve un JSX

function SomeDiv() {

  let username = "Jorge"
  return (
    <div>
      <h3>Hola mundo de React, mi nombre es {username}</h3>
      <p>bienvenidos a mi pagina</p>
      <p>La fecha de hoy es: {new Date().toDateString()}</p>
      <p>patata</p>
    </div>
  )
}

function Footer() {

  return (
    <footer>
      <p>Este es el footer</p>
    </footer>
  )

}

// root.render( SomeDiv() ) // funciona peeeero...
root.render(<div>
  <SomeDiv />
  <Footer />
</div>
)

//! REACT NO PERMITE RENDERIZAR MULTIPLES COMPONENTES O ETIQUETAS A LA VEZ, TODAS TIENEN QUE IR DENTRO DE UNA MISMA ETIQUETA
