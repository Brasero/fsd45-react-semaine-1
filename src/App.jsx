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
                // Lorsque l'on souhaite boucler sur un tableau afin d'afficher un élément JSX pour chaque élément du tableau, on
                // utilisera exclusivement des fonctions de tableau et plus généralement la fonction map comme ci-dessous
                // Tout élément retourné au travers d'un map devra posséder un props "key" uniquement afin que React puisse l'identifier
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
