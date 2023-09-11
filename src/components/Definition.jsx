import React from 'react'
import { Box, Card, Divider, Typography } from '@mui/material'

const Definition = ({ definitions, examples, matchesSm, lightTheme}) => {

  return (
    // <li>
    <Card
      sx={{
        width: '100%',
        minHeight: '120px',
        padding: 3,
        boxSizing: 'border-box',
        my: 1.2,
        borderRadius: '12px',
        backgroundColor: lightTheme ? '#9a2758' : '#231942',
        color: lightTheme ? '#9ac4f8' : '#e0b1cb'
      }}
    >
      <Typography variant="h6" 
      sx={{ mb: '6px', textAlign: 'left', fontSize: matchesSm ? '20px' : '24px' }} >
        {definitions}
      </Typography>
      <Divider />
      <Box
        sx={{
          display: matchesSm ? 'block' :'flex',
          justifyContent: 'flex-start',
          alignItems: 'baseline',
          my: '6px',
          minHeight: '30%'
        }}
      >
        <Typography variant="h6" sx={{ mr: 1 }}> examples:  </Typography>
        <Typography variant='body2' sx={{ textAlign: 'left' }} >
          {examples ? examples : '----------------'}
        </Typography>
      </Box>
    </Card>
    // </li>

  )
}

export default Definition