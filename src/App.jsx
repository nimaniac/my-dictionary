import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import Definitions from './components/Definitions'
import ThemeChange from './components/ThemeChange'
import axios from 'axios'
import { useTheme, useMediaQuery, Box } from '@mui/material'

const App = () => {

  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [lightTheme, setLightTheme] = useState(false);


  const dictionaryApi = async () => {
    try {
      const data = await axios.get(`http://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setMeanings(data.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dictionaryApi();
  }, [word])

  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: lightTheme ? '#99edcc' : '#9f86c0',
        overflow: 'hidden',
      }}
    >
      <ThemeChange
        lightTheme={lightTheme}
        setLightTheme={setLightTheme}
      />
      <Header
        word={word}
        matchesSm={matchesSm}
        lightTheme={lightTheme}
      />
      <SearchForm
        word={word}
        setWord={setWord}
        setMeanings={setMeanings}
        matchesSm={matchesSm}
        lightTheme={lightTheme}
      />
      {
        meanings &&
        <Definitions
          meanings={meanings}
          word={word}
          matchesSm={matchesSm}
          lightTheme={lightTheme}
        />
      }


    </Box>
  )
}

export default App
