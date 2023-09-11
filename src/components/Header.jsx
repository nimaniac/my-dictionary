import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = ({word, matchesSm, lightTheme}) => {
  return (
    <Box
    sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100vw',
        height:'20vh'
    }}
    >
        <Typography variant='h1' color={ lightTheme ? '#9a275a' : '#231942' }
        sx={{
          fontSize: matchesSm ? '3.5rem' : '4rem'
        }} >
            {word ? word : 'My Dictionary'}
        </Typography>
    </Box>
  )
}

export default Header