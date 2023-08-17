import { createContext, useContext, useState } from "react"

const Contexto = createContext({valor: false, toggle: ()=>{}});

const MiProvider = ({children}) => {
  const [valor, setValor] = useState(false);
  const value = {
    valor,
    toggle : ()=> setValor(!valor),
  }
  return (
    <Contexto.Provider value={value}> 
      {children}
    </Contexto.Provider>
  );
}

const Componente  = () => {
  const {valor , toggle} = useContext(Contexto);
  return(
    <div>
      <label >{valor.toString()}</label>
      <button onClick={toggle}> toggle </button>
    </div>
  );
}

function App() {
  return (
    <MiProvider>
      <Componente />
    </MiProvider>
  )
}

export default App