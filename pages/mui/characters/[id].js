import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@/Link';
import Copyright from '@/Copyright';
import { getCharacterBy } from '@/services/characters-service';
// import { Date, MyPieChart } from '../../src/components/date';
import Image from 'next/image';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import Date from '@//components/date';
import MyPieChart from '@//components/my-pie-chart';
import CharactersStatsArray from '@/components/character-stats-array';
import MyBartChart from '@/components/my-bart-chart';

export default function CharacterPage() {
  const router = useRouter()

  const character = getCharacterBy(router.query.id)
  const data = [{ label: 'Comics', value: character?.comics?.available }, { label: 'Series', value: character?.series?.available }, { label: 'Stories', value: character?.stories?.available }, { label: 'Events', value: character?.events?.available }];

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" component="h1" gutterBottom>
              Marvel App - Characters
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" component={Link} noLinkStyle href="/mui">
              Go to the main page
            </Button>
          </Grid>
          <Grid item xs={12} sm={12}>
            <h1>
              {character.name}
            </h1>
          </Grid>
          <Grid item xs={12} sm={12}>
            <h2>
              <Date dateString={character.modified} />
              </h2>
          </Grid>
          <Grid item xs={12} sm={2}>
            {character.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' && (
              <Image
                src={character.thumbnail.path + '/standard_large' + '.' + character.thumbnail.extension} // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                // className={utilStyles.borderCircle}
                style={{ borderRadius: '50%' }}
                alt={character.name}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={10}>
            <p>
              {character.description}
            </p>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="h4" component="h2" gutterBottom>
              Statistics
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CharactersStatsArray character={character} />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <MyPieChart data={data} outerRadius={100} innerRadius={50} /> */}
            {/* <MyBartChart data={data} /> */}
          </Grid>
        </Grid>
        <Copyright />
      </Box>
    </Container>
  );
}
