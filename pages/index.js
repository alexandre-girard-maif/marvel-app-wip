import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { AppBar, IconButton } from '@mui/material';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import { getCharacters } from '../src/services/characters-service'
import NumberOfCharacters from '@/components/number-of-characters';
import CharactersList from '@/components/characters-list';

export default function Home() {
  const [order, setOrder] = React.useState('asc')
  const characters = getCharacters(order)
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Marvel App - Characters
        </Typography>
        Order by name: <button onClick={() => setOrder('asc')} style={order === 'asc' ? { color: 'Highlight' } : {}} >Asc</button> <button onClick={() => setOrder('desc')} style={order === 'desc' ? { color: 'Highlight' } : {}} >Desc</button>
        <CharactersList characters={characters} />
        <NumberOfCharacters characters={characters} />
        <Copyright />
      </Box>
    </Container>
  );
}
