import React from 'react'
import { Box, Button } from '@mui/material'

const ThemeChange = ({ lightTheme, setLightTheme }) => {

    const themeChangeHandler = () => {
        setLightTheme((prevState) => !prevState)
    }

    const buttonStyles = {
        position: 'absolute',
        right: '2vw',
        top: '2vh',
        width: '10vw',
        height: '5vh',
        fontWeight: 'bolder',
        backgroundColor: lightTheme ? '#9a275a' : '#231942',
        color: lightTheme ? '#9ac4f8' : '#e0b1cb',
        ':hover': {
            backgroundColor: lightTheme ? '#9ac4f8' : '#e0b1cb',
            color: lightTheme ? '#9a275a' : '#231942'
        }
    }

    return (
        <Button
            sx={buttonStyles}
            variant='contained'
            onClick={themeChangeHandler}
            elevation={24}
        >
            {lightTheme ? 'Dark' : 'Light'}
        </Button>
    )
}

export default ThemeChange