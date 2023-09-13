import NumberButton from "../NumberButton/index.jsx";
import CalcButtons from "../CalcButtons/index.jsx";


function ButtonsGroup({dispatch}) {

    return (
        <div style={{display: 'flex'}}>
            <NumberButton dispatch={dispatch} />
            <CalcButtons dispatch={dispatch} />
        </div>
    )
}

export default ButtonsGroup