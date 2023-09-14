import ButtonsGroup from "../ButtonsGroup/index.jsx";
import Computer from "../Computer/index.jsx";
import {createContext, useReducer} from "react";
import calcReducer, {initialState} from "../../Reducer/index.js";


export const CalcContext = createContext({})

const CalcContextProvider = ({children}) => {

    const THEMES = {
        light: {
            background: '#fff',
            color: "#000"
        },
        dark: {
            background: '#000',
            color: "#fff"
        }
    }

    const [state, dispatch] = useReducer(calcReducer, initialState)
    const handleLog = () => {
        console.log('je vient du context')
    }

    return <CalcContext.Provider value={{state, dispatch, handleLog}}>
        {children}
    </CalcContext.Provider>

}

function Calculatrice() {
    return (
        <CalcContextProvider>
            <div className={'calculatrice'}>
                <div>
                    <div className={'calculatrice__head'}>
                        <Computer />
                    </div>
                    <div className={'calculatrice__buttons__wrapper'}>
                        <ButtonsGroup/>
                    </div>
                </div>
            </div>
        </CalcContextProvider>
    )
}
export default Calculatrice