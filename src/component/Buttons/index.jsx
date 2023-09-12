import Button from "../Button/index.jsx";

const Buttons = ({items, handleClick}) => {
    return (
        <div>
            {
                items.map((button, index) => {
                    return (<Button handleClick={handleClick} name={button} key={`${button}-${index}`} />)
                })
            }
        </div>
    )
}

export default  Buttons