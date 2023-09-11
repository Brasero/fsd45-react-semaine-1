

const Hello = ({name}) => {

    const [newName, surname] = name.split('-')

    return (
        <>
            <div>Bonjour {newName}  {surname}</div>
        </>
    )
}

export default Hello;