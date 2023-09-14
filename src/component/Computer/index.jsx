import './computer.css';
import {useContext} from "react";
import {CalcContext} from "../Calculatrice/index.jsx";

function Computer() {

    const {state} = useContext(CalcContext)
    const {currentNumber} = state

    return (
        <div className={'computer__wrapper'}>
            <span className={'computer__value'}>
                {
                    currentNumber
                }
            </span>
        </div>
    )
}

export default Computer