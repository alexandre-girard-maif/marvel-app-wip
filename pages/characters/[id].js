import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../../src/Link';
import Copyright from '../../src/Copyright';
import { getCharacterBy } from '@/services/characters-service';
// import { Date, MyPieChart } from '../../src/components/date';
import Image from 'next/image';
import { Avatar } from '@mui/material';
import { useRouter } from 'next/router';
import Date from '../../src/components/date';
import MyPieChart from '../../src/components/my-pie-chart';



export default function Character() {
  const router = useRouter()

  const character = getCharacterBy(router.query.id)
  const data = [{ label: 'Comics', value: character.comics?.available }, { label: 'Series', value: character.series?.available }, { label: 'Stories', value: character.stories?.available }, { label: 'Events', value: character.events?.available }];

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Marvel App - Characters
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
        <div>
          <h1>
            {character.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' && (
              <Avatar alt={character.name} src={character.thumbnail.path + '/standard_large' + '.' + character.thumbnail.extension} />
            )}{character.name}
          </h1>
          <h2><Date dateString={character.modified} /></h2>
          <p>
            {character.description}
          </p>

          {character.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' && (
            <Image
              src={character.thumbnail.path + '/standard_large' + '.' + character.thumbnail.extension} // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              // className={utilStyles.borderCircle}
              alt={character.name}
            />
          )}



          <table >
            <thead>
              <tr>
                <th>Comics</th>
                <th>Series</th>
                <th>Stories</th>
                <th>Events</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{character.comics?.available}</td>
                <td>{character.series?.available}</td>
                <td>{character.stories?.available}</td>
                <td>{character.events?.available}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <MyPieChart data={data} outerRadius={100} innerRadius={50} />
        <Copyright />
      </Box>
    </Container>
  );
}
