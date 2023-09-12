

const ArraySize = ({list, name}) => {
    const size = list.length

    return (
        <div>
            Le tableau {name} contient {size} élèments.
        </div>
    )
}

export default ArraySize