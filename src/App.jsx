import './App.css'

function App() {

    const list = [
        'banane',
        'tomates',
        'courgettes'
    ]

    const MESSAGES = [
        { message : "React JS" },
        { message : "React Native" },
        { message : "Angular" },
        { message : "Symfony" },
        { message : "MongoDB" },
    ]

    return (
        <ul>
            {
                list.map((element, index) => {
                    return (
                        <li key={index}>{element}</li>
                    )
                })
            }
        </ul>
    )
}

export default App
