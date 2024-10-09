/* eslint-disable react/prop-types */
import { createContext } from "react";

const DashBoardState = createContext()


function DashBoardProvider({children}) {
    return (
        <DashBoardState.Provider value={{

        }}>
            {children}
        </DashBoardState.Provider>
    )
}

export { DashBoardState, DashBoardProvider}