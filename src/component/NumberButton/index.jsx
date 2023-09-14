import "./button.css";
import {useContext} from "react";
import {CalcContext} from "../Calculatrice/index.jsx";

function NumberButton() {

    const {dispatch} = useContext(CalcContext)

    const numbers = ['.',0,1,2,3,4,5,6,7,8,9]
    numbers.reverse()


    const handleClick = (payload) => {
        dispatch({type: 'changeValue', payload})
    }

    return (
        <div className={'numberGrid'}>
            {
                numbers.map((val, key) => {
                    return (<button key={key} onClick={() => handleClick(val)}>{val}</button>)
                })
            }
        </div>
    )
}

export default NumberButton