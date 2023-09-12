
const List = ({items, dispatch}) => {

    const handleSuppress = (id) => {
        dispatch({type: 'suppressProduct', payload: id})
    }

    const handleIncrement = (id) => {
        dispatch({type: 'increment', payload: id})
    }

    const handleDecrement = (id) => {
        dispatch({type: 'decrement', payload: id})
    }

    const totalTotal = items.reduce((acc, current) => {
        return acc + (current.prix * current.qte)
    }, 0)

    return (
        <>
            <ul>
                {
                    items.map((item,index) => {
                        const total = item.prix * item.qte
                        return (<li key={`${item.name}-${index}`}>
                            <span>{item.name}</span>
                            <p>{item.description}</p>
                            <p>{item.prix} €</p>
                            <button onClick={() => handleDecrement(item.id)}>-</button>
                            {item.qte}
                            <button onClick={() => handleIncrement(item.id)}>+</button>
                            <button onClick={() => handleSuppress(item.id)}>X</button>
                            <p>Sous-total : {total} €</p>
                        </li>)
                    })
                }
            </ul>
            <div>
                Total : {totalTotal} €
            </div>
        </>
    )
}

export default List