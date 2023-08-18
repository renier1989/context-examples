import { Component, createContext } from "react";

const Contexto = createContext("valor por defecto");

const MiProvider = ({ children }) => {
  return (
  <Contexto.Provider value={'otro valor.'}>{children}</Contexto.Provider>
  );
};


class Componente extends Component {
    //  // esta es una forma de acceder al contexto en un componente creado como clase se debe usar estrictametne la palabra contextType = <nombre del contexto>
    //  static contextType = Contexto
  render() {
    // console.log(this.context);
    return <div>Hola mundo</div>;
  }
}

// esta es otra forma de poder acceder al contexto con una componente creado como clase 
// Componente.contextType=Contexto;

const App = () =>{
  return (
    <MiProvider>
      <Componente />
      {/* esta es otra forma de poder acceder al contexto , sin necesidad de tener de el contextType o el hook de useContext  */}
      <Contexto.Consumer>
        {valor => <div>{valor}</div> }
      </Contexto.Consumer>
    </MiProvider>
  );
} 

export default App;
