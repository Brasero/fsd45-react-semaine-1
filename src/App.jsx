import './App.css'
import {useEffect, useState} from "react";
import Students from "./Students/index.jsx";

function App() {

    const [counter, setCounter] = useState(0)

    const students = [
        { notes: [12, 11, 10], name: "Alan" },
        { notes: [18, 10, 19], name: "Alice" },
        { notes: [10, 9, 11], name: "Bernard" },
        { notes: [11, 17, 19], name: "Sophie" },
    ];

    useEffect(() => {
    }, []);

    const handleClick = () => {
        setCounter(counter + 1)
    }


    return (
        <>
            <Students students={students} />
            <button onClick={handleClick}> +1</button>
        </>
    )
}

export default App
