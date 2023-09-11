import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import Definition from './Definition'


const Definitions = ({ word, meanings, matchesSm, lightTheme }) => {

  const typographyStyles = {
    color: lightTheme ? '#9ac4f8' : '#e0b1cb',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    fontWeight:'bold'
  }

  return (
    <Box
      sx={{
        width: '100vw',
        height: '62vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Paper
        sx={{
          width: '80%',
          height: '100%',
          bgcolor: lightTheme ? '#e36588' : '#5e548e',
          padding: 2,
          boxSizing: 'border-box',
          overflowX: 'hidden',
          overflowY: 'auto',
          borderRadius: '20px'
        }}
        elevation={24}
      >
        {/* <ul> */}
        {
          word === '' ? (
            <Typography variant='h3' sx={typographyStyles}>
              start by searching a word
            </Typography>
          )
            :
            (
              meanings.map((mean) =>
                mean.meanings.map((item) =>
                  item.definitions.map((def, index) => (
                    <Definition
                      key={index}
                      definitions={def.definition}
                      examples={def.example}
                      synonyms={def.synonyms}
                      matchesSm={matchesSm}
                      lightTheme={lightTheme}
                    />
                  ))
                ))
            )
        }

        {/* </ul> */}

      </Paper>
    </Box>
  )
}

export default Definitions