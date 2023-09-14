import {createContext, useContext, useState} from "react";
import axios from 'axios';


const AxiosContext = createContext({})
const basePath = "https://api-adresse.data.gouv.fr/"


const AxiosProvider = ({children}) => {
    const context = useProvideAxios()
    return <AxiosContext.Provider value={context}>
        {children}
    </AxiosContext.Provider>
}

export const useAxios = () => {
    return useContext(AxiosContext)
}

const useProvideAxios = () => {

    const [cities, setCities] = useState([])

    const get = (path, params = {}) => {
        return axios.get(`${basePath}${path}`, params)
    }

    return {
        cities,
        setCities,
        get
    }
}

export default AxiosProvider;