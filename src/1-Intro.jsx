/* eslint-disable react/prop-types */
import { createContext, useContext } from "react"

const Contexto = createContext('valor por defecto');
const Contexto2 = createContext('valor por defecto del segundo contexto');

const MiProvider = ({children}) => {
  return(
    <Contexto.Provider value={'mi primer valor'}>
      {children}
    </Contexto.Provider>
  )
}

const Contenido = () => {
  const ctx = useContext(Contexto);
  return(
    <div>{ctx}</div>
  );
}
const Contenido2 = () => {
  const ctx = useContext(Contexto2);
  return(
    <div>{ctx}</div>
  );
}

export const App = () => {
  return (
    <MiProvider>
      <Contenido />
      <Contenido2 />
    </MiProvider>
  )
}
