import { useReducer } from "react";
import { infoReducer } from "./reducer";
import { Infos } from './data'
import { InfosContext } from "./context";

export const InfosProvider = ({ children }: any) => {

  const [infoState, infoDispatch] = useReducer(infoReducer, Infos);

  return (
    <InfosContext.Provider value={{ infoDispatch, infoState }}>
      {children}
    </InfosContext.Provider>
  )
}