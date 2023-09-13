import ButtonsGroup from "../ButtonsGroup/index.jsx";
import Computer from "../Computer/index.jsx";
import {useReducer} from "react";
import calcReducer, {initialState} from "../../Reducer/index.js";

function Calculatrice() {

    const [state, dispatch] = useReducer(calcReducer, initialState)

    return (
        <div className={'calculatrice'}>
            <div>
                <div className={'calculatrice__head'}>
                    <Computer value={state.currentNumber} />
                </div>
                <div className={'calculatrice__buttons__wrapper'}>
                    <ButtonsGroup dispatch={dispatch} />
                </div>
            </div>
        </div>
    )
}
export default Calculatrice