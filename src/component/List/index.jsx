
const List = ({items, handleClick}) => {

    return (
        <ul>
            {
                items.map((item,index) => {
                    return (<li key={`${item}-${index}`}>
                        <span>{item}</span>
                        <button onClick={() => handleClick(item)}>X</button>
                    </li>)
                })
            }
        </ul>
    )
}

export default List