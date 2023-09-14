import './themeButton.css'
import {BsFillMoonStarsFill, BsSunFill} from "react-icons/bs";
import {useState} from "react";

const ThemeButton = () => {

    const [state, setState] = useState(false)
    const toggleState = () => {
        setState(!state)
    }

    const buttonStyle = state ? {transform: 'translate(95%, -50%)'} : {transform: 'translate(0%, -50%)'}

    return (
        <div className={'button_slider'}>
            <div className={'slider'}>
                <div
                    className={'button'}
                    onClick={toggleState}
                    style={buttonStyle}
                >
                    {
                        state ? <BsFillMoonStarsFill className={'icon'} /> : <BsSunFill className={'icon'} />
                    }

                </div>
            </div>
        </div>
    )
}

export default ThemeButton;