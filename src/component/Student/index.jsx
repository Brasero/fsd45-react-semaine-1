


const Student = ({student}) => {

    const average = (student.notes.reduce((acc, current) => {
        return acc + current
    }, 0)) / student.notes.length

    return (
        <div>
            <span>{student.name}</span>
            <ul>
                {
                    student.notes.map((note, index) => {
                        return <li key={index} >{note}</li>
                    })
                }
            </ul>
            <span>Moyenne : {average}</span>
        </div>
    )
}

export default Student