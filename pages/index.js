import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../src/Copyright';
import { getCharacters, getNumberOfCharacters } from '../src/services/characters-service'
import NumberOfCharacters from '@/components/number-of-characters';
import CharactersList from '@/components/characters-list';
import MuiCharacterOrder from '@/components/mui-characters-order';
import CharacterOrder from '@/components/characters-order';
import Link from 'next/link';

export default function Home() {
  const [order, setOrder] = React.useState()
  const characters = getCharacters(order, 25)
  const numberOfCharacters = getNumberOfCharacters()
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Marvel App - Characters
        </Typography>
        <Link href="/mui">Go to the main page material</Link>
        <CharacterOrder order={order} onAscClick={() => setOrder('asc')} onDescClick={() => setOrder('desc')} />
        <CharactersList characters={characters} />
        <NumberOfCharacters displayed={characters.length} total={numberOfCharacters} />
        <Copyright />
      </Box>
    </Container>
  );
}
