import { createContext, useContext, useState } from "react"

const Contexto = createContext();

const MiProvider = ({children}) => {
  const [contador , setContador] = useState(0)

  const incrementar = ()=>setContador(contador + 1);
  const decrementar = ()=>setContador(contador - 1);

  return (
    <Contexto.Provider value={{contador, incrementar, decrementar}}>
      {children}
    </Contexto.Provider>
  )
}

const Incrementar = () => {
  const {incrementar} = useContext(Contexto)
  console.log('Incrementar');
  return (
    <button onClick={incrementar}> Incrementar</button>
  );
}

const Decrementar = () => {
  const {decrementar} = useContext(Contexto)
  console.log('Decrementar');
  return (
    <button onClick={decrementar}> Decrementar</button>
  );
}

const Title = () => {
  const {contador } = useContext(Contexto);
  console.log('Titulo');
  return(
    <h1>{contador}</h1>
  )
}

function App() {
  return (
    <MiProvider>
      <Title/>
      <br />
      <Decrementar />
      <Incrementar />
    </MiProvider>
  )
}

export default App

//PARTE 1: "el problema" en esta version de App, se pone en evidencia el problema que tiene Contexto. que es que no se podra evitar de ninguna menera el re-render de los componentes hijos que contento el Provider.