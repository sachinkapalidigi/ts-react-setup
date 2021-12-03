import React, {useState} from 'react'
import ThemeContext from './ThemeContext'

type ThemeProviderProps = {
    children: React.ReactNode;
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<string>("green");
    React.useEffect(()=>{
        const currTheme = "white"; // comes from local storage/api
        setTheme(currTheme);
    }, []);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}



export default ThemeProvider
