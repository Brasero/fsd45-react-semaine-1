import {createContext, useContext, useReducer} from "react";
import axios from "axios"
import TownReducer, {initialTownState} from "../Reducer/townReducer.jsx";

const TOWN_API_BASEPATH = "https://api-adresse.data.gouv.fr/search/?q="

export const TownContext = createContext({})

export const useTown = () => {
    return useContext(TownContext)
}

const TownContextProvider = ({children}) => {

    const context = ProvideTownContext()

    return <TownContext.Provider value={context}>
        {children}
    </TownContext.Provider>
}

const ProvideTownContext = () => {

    const [town, dispatch] = useReducer(TownReducer, initialTownState)
    const searchTown = (query) => {
        dispatch({type: 'LOADING_VILLE'})
        const params = query.replace(/ /g,'+')
        axios.get(`${TOWN_API_BASEPATH}${params}&type=municipality`).then(({data}) => {
            dispatch({type: 'ADD_VILLE', payload: data.features})
        })
    }

    return {
        town,
        searchTown
    }
}

export default TownContextProvider