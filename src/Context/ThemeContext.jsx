import React, { useState } from 'react'
import { createContext } from 'react'

export const ThemeContext=createContext();

export const ThemeProvider=({children})=>{

    const [theme,setTheme]=useState("light");

    const ToggleTheme=()=>{
        if(theme==="light"){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }
    return (
        <ThemeContext.Provider  value={{theme, isLight: theme==="light",ToggleTheme}}>{children}</ThemeContext.Provider>
    )
}