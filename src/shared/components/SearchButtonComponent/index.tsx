import React, { useContext } from "react";
import './style.css'
import { loadSearchedInfos } from "../../../contexts/ContextAPI/actions";
import { InfosContext } from "../../../contexts/ContextAPI/context";

const GreenSearchButton = () => {

    const searchContext = useContext(InfosContext);
    const {infoState, infoDispatch} = searchContext;

    return (
        <>
            <button className="SearchGreenButton">
                PESQUISAR
            </button>
        </>

    )
}

export default GreenSearchButton