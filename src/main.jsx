import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TownContextProvider from "./context/useTown.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TownContextProvider>
            <App/>
        </TownContextProvider>
    </React.StrictMode>,
)
