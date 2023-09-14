import {createContext, useContext, useState} from "react";


export const UseTheme = createContext({})

export const useTheme = () => {
    return useContext(UseTheme)
}

const ThemeContextProvider = ({children}) => {

    const context = useProvideTheme()

    return (
        <UseTheme.Provider value={context}>
            {children}
        </UseTheme.Provider>
    )
}

const useProvideTheme = () => {
    const [theme, setTheme] = useState(true)
    const changeTheme = () => {
        setTheme(!theme)
    }

    const THEMES = {
        light: {
            background: '#fff',
            color: "#213547"
        },
        dark: {
            background: '#213547',
            color: "#fff"
        }
    }

    const themeValue = theme ? THEMES.light : THEMES.dark

    return {
        state: theme,
        changeTheme,
        themeValue
    }

}

export default ThemeContextProvider;