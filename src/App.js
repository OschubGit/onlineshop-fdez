import './App.css';
import Typography from '@mui/material/Typography';
import {Container} from "@mui/material";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
      </header>
      <Container className='container'>
        <Typography variant='h1'>
          ¡Hey!
        </Typography>
      </Container>
    </div>
  );
}

export default App;
