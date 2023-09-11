import { Box, FormGroup, TextField } from '@mui/material'
import React from 'react'

const SearchForm = ({ word, setWord, matchesSm, lightTheme }) => {

    const textfieldStyles = {
        width: '80%',
        textAlign: 'center',
        '& .MuiOutlinedInput-root': {
            backgroundColor: lightTheme ? '#9a2758' : '#231942',
            opacity: '0.95'
        },
        '& .MuiInputLabel-root': {
            color: lightTheme ? '#9ac4f8' : '#e0b1cb',
            fontWeight: 'bolder'
        },
        "& .MuiOutlinedInput-input": {
            color: lightTheme ? '#9ac4f8' : '#e0b1cb',
            fontWeight: 'bolder'
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
                borderColor: lightTheme ? '#9ac4f8' : '#e0b1cb',
            }
        },
        '& label.Mui-focused': {
            color: lightTheme ? '#9ac4f8' : '#e0b1cb'
        }
    }

    return (
        <Box
            sx={{
                width: '100vw',
                height: '15vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <form>
                <FormGroup
                    row
                    sx={{
                        width: '80vw',
                        justifyContent: 'space-around'
                    }}
                >
                    <TextField
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                        label='search a word'
                        sx={{
                            ...textfieldStyles,
                            width: matchesSm ? '80%' : '60%'
                        }}
                    />
                </FormGroup>
            </form>
        </Box>

    )
}

export default SearchForm