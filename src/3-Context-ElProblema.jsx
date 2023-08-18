/* eslint-disable react/display-name */
import { createContext, memo, useCallback, useContext, useState } from "react"

const Contexto = createContext();

const MiProvider = ({children}) => {
  const [contador , setContador] = useState(0)

  // aqui se intenta aplicar la optimizacion para evitar el re-render de la funciones que son las que actuializan constantemente el estado de la propiedad valor
  const incrementar = useCallback(()=>setContador(x => x + 1), []);
  const decrementar = useCallback(()=>setContador(x=>x - 1),[]);

  return (
    <Contexto.Provider value={{contador, incrementar, decrementar}}>
      {children}
    </Contexto.Provider>
  )
}

// aqui se intenta optimizar con memo el componente para igualmente evitar el re-rendering
const Incrementar = memo(() => {
  const {incrementar} = useContext(Contexto)
  console.log('Incrementar');
  return (
    <button onClick={incrementar}> Incrementar</button>
  );
})

// aqui se intenta optimizar con memo el componente para igualmente evitar el re-rendering
const Decrementar = memo(() => {
  const {decrementar} = useContext(Contexto)
  console.log('Decrementar');
  return (
    <button onClick={decrementar}> Decrementar</button>
  );
})

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

//PARTE 2: "Intento de optimizacion" en esta version se agrego la parte de la optimizacion con memo para los componentes y useCallback para las funciones e intentar memoizar la aplicacion, pero sin un resultado favorable ya que el provider simpre a estar aplicarndo re-rendering a todos los componentes hijos que este contenga. 

// RECOMENTADIONES : usar la API de Context es muy util y flexible si se trata de aplicaciones muy pequeñas sin un gran inpacto sobre la aplicacion, pero para aplicacion mucho mas grandes que van a escalar con el timepo o con analisis de datos y ejecuciones de funciones muy pesadas es recomendable usar redux.