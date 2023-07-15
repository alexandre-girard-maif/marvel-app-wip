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
import MuiAppBar from '@/components/mui-app-bar';
import { Grid } from '@mui/material';
import MuiNumberOfCharacters from '@/components/mui-number-of-characters';

export default function Home() {
  const [order, setOrder] = React.useState()
  const [orderBy, setOrderBy] = React.useState('name')
  const characters = getCharacters(orderBy, order, 8)
  const numberOfCharacters = getNumberOfCharacters()
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <MuiAppBar />
          </Grid>
          <Grid item xs={12} sm={12}>
            <MuiCharacterOrder order={order} orderBy={orderBy} 
              onAscClickByName={() => {setOrder('asc'), setOrderBy('name')}} 
              onDescClickByName={() => {setOrder('desc'), setOrderBy('name')}} 
              onAscClickByModified={() => {setOrder('asc'), setOrderBy('modified')}} 
              onDescClickByModified={() => {setOrder('desc'), setOrderBy('modified')}} 
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <MuiCharactersList characters={characters} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <MuiNumberOfCharacters displayed={characters.length} total={numberOfCharacters} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Copyright />
        </Grid>
      </Box>
    </Container>
  );
}
