import React from 'react'
import useTheme from './hooks/useTheme'

const Header: React.FC = () => {
    const { theme } = useTheme()!;

    console.log("header is rendered");
    return (
        <div className="" style={{border: "1px solid red", background: theme}}>
            Header
            {/*  */}
        </div>
    )
}

export default Header
