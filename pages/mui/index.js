import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '@/Copyright';
import { getCharacters, getNumberOfCharacters } from '@/services/characters-service'
import NumberOfCharacters from '@/components/number-of-characters';
import CharactersList from '@/components/characters-list';
import MuiCharacterOrder from '@/components/mui-characters-order';
import MuiCharactersList from '@/components/mui-characters-list';
import Link from 'next/link';

export default function Home() {
  const [order, setOrder] = React.useState()
  const characters = getCharacters(order, 8)
  const numberOfCharacters = getNumberOfCharacters()
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Marvel App - Characters
        </Typography>
        <Link href="/">Go to the main page classic</Link> 
        <MuiCharacterOrder order={order} onAscClick={() => setOrder('asc')} onDescClick={() => setOrder('desc')} />
        <MuiCharactersList characters={characters} />
        <NumberOfCharacters displayed={characters.length} total={numberOfCharacters} />
        <Copyright />
      </Box>
    </Container>
  );
}
