import NumberButton from "../NumberButton/index.jsx";
import CalcButtons from "../CalcButtons/index.jsx";


function ButtonsGroup() {

    return (
        <div style={{display: 'flex'}}>
            <NumberButton />
            <CalcButtons />
        </div>
    )
}

export default ButtonsGroup