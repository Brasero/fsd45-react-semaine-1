import './App.css'
import productReducer, {initialState} from "./Reducer/index.js";
import {useReducer} from "react";
import ProductForm from "./component/ProductForm/index.jsx";
import List from "./component/List/index.jsx";

function App() {

    const [state, dispatch] = useReducer(productReducer, initialState)


    return (
        <>
            <List items={state.products}  dispatch={dispatch}/>
            <ProductForm state={state.product} dispatch={dispatch} />
        </>
    )
}

export default App
