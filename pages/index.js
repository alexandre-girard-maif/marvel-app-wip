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
import CharacterOrder from '@/components/characters-order';

export default function Home() {
  const [order, setOrder] = React.useState()
  const characters = getCharacters(order)
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Marvel App - Characters
        </Typography>
        <CharacterOrder order={order} onAscClick={() => setOrder('asc')} onDescClick={() => setOrder('desc')} />
        <CharactersList characters={characters} />
        <NumberOfCharacters characters={characters} />
        <Copyright />
      </Box>
    </Container>
  );
}
