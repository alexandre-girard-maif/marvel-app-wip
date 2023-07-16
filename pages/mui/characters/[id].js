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
import DonutChartSample from '@/components/donut-chart-sample';
import BarPlotSample from '@/components/bar-plot-sample';
import MuiAppBar from '@/components/mui-app-bar';

export default function CharacterPage() {
  const router = useRouter()

  const character = getCharacterBy(router.query.id)
  const data = [{ name: 'Comics', value: character?.comics?.available }, { name: 'Series', value: character?.series?.available }, { name: 'Stories', value: character?.stories?.available }, { name: 'Events', value: character?.events?.available }];

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <MuiAppBar />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button variant="contained" component={Link} noLinkStyle href="/mui">
              Go to the main page
            </Button>
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
          <Grid item xs={12} sm={2}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
              {character.name}
            </Typography>
            <Typography variant="body2" component="h4" gutterBottom align="center">
              <Date dateString={character.modified} />
            </Typography>
          </Grid>

          <Grid item xs={12} sm={8}>
          <Typography variant="body2" component="h4" gutterBottom align="center">
              {character.description}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" component="h2" gutterBottom>
              Statistics
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <CharactersStatsArray character={character} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DonutChartSample data={data} outerRadius={100} innerRadius={75} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BarPlotSample data={data} outerRadius={100} innerRadius={75} />
          </Grid>
        </Grid>
        <Copyright />
      </Box>
    </Container>
  );
}
