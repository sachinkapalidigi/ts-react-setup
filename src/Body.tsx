import React from 'react'
import useTheme from './hooks/useTheme'

const Body = () => {
    const {theme} = useTheme()!;

    console.log("body renders");
    return (
        <div style={{background: theme, height: "300px", width: "100%"}}>
            This is the body
        </div>
    )
}

export default Body
