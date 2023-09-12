import './button.css'
const Button = ({handleClick, name}) => {

    return (
        <>
            <button style={{
                background:  name === 'Eau' ? 'red' : 'blue',
            }} className={'suppress_button'} onClick={() => handleClick(name)}>{name}</button>
        </>
    )
}

export default Button