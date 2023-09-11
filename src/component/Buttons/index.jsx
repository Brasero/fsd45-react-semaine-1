
const Buttons = ({items, handleClick}) => {
    return (
        <div>
            {
                items.map((button, index) => {
                    return (<button key={`${button}-${index}`} onClick={() => handleClick(button)}>{button}</button>)
                })
            }
        </div>
    )
}

export default  Buttons