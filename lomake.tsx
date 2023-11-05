import './App.css';
import { Typography, Card, CardContent, Grid, TextField, Button } from '@mui/material';

function App() {

  return (
    <div className="App">
      <Typography gutterBottom variant="h3" align="center">
        Yhteydenottolomake (React)
      </Typography>
      <Card style={{maxWidth:450, margin:"0 auto",padding:"20px 5px"}}>
        <CardContent>
          <Typography gutterBottom variant="h5">Ota yhteyttä</Typography>
          <Typography gutterBottom color="textSecondary"variant="body2" component="p">Täytä lomake niin otamme sinuun yhteyttä mahdollisimman nopeasti.</Typography>
          <form>
          <Grid container spacing={1}>

            <Grid xs={12} sm={6} item>
              <TextField label="Etunimi" placeholder="Kirjoita etunimesi" variant="outlined" fullWidth required />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField label="Sukunimi" placeholder="Kirjoita sukunimesi" variant="outlined" fullWidth required />
            </Grid>

            <Grid xs={12} item>
              <TextField type="email" label="Sähköposti" placeholder="Anna sähköpostisoitteesi" variant="outlined" fullWidth required />
            </Grid>

            <Grid xs={12} item>
              <TextField type="number" label="Puhelin" placeholder="Anna puhelinnumerosi" variant="outlined" fullWidth required />
            </Grid>

            <Grid xs={12} item>
              <TextField label="Viesti" multiline rows={4} placeholder="Kirjoita viestisi tähän.." variant="outlined" fullWidth required />
            </Grid>

            <Grid xs={12} item>
              <Button type="submit" variant="contained" color="primary" fullWidth>Lähetä</Button>
            </Grid>

          </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );

}

export default App;