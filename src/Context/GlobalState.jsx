/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react";

const GlobalState = createContext()


function GlobalProvider({children}) {

    const [control, setControl] = useState(true)
    const [inventario, setInventario] = useState(false)
    const [video, setVideo] = useState(false)
    return (
        <GlobalState.Provider value={{
            control,
            inventario,
            video,
            setControl,
            setInventario,
            setVideo
        }}>
            {children}
        </GlobalState.Provider>
    )
}

export { GlobalState, GlobalProvider}