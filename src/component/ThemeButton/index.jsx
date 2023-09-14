import './themeButton.css'
import {BsFillMoonStarsFill, BsSunFill} from "react-icons/bs";
import {useTheme} from "../../context/useTheme.jsx";

const ThemeButton = () => {

    const {themeValue, changeTheme, state} = useTheme()

    const toggleState = () => {
        changeTheme()
    }

    const buttonStyle = !state ? {transform: 'translate(95%, -50%)'} : {transform: 'translate(0%, -50%)'}

    return (
        <div className={'button_slider'}>
            <div className={'slider'} style={themeValue}>
                <div
                    className={'button'}
                    onClick={toggleState}
                    style={buttonStyle}
                >
                    {
                        !state ? <BsFillMoonStarsFill className={'icon'} /> : <BsSunFill className={'icon'} />
                    }

                </div>
            </div>
        </div>
    )
}

export default ThemeButton;