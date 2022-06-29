import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Container} from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', flexGrow: 1 }}>
            <nav className='nav'>
              <div className='nav-menu'>
                <Typography sx={{ minWidth: 100 }}>Home</Typography>
                <Typography sx={{ minWidth: 100 }}>Shop</Typography>
              </div>
              <div className='btn-login'>
                <Button variant='outlined' color="inherit">Login</Button>
              </div>
            </nav>
          </Box>
            </Toolbar>
          </AppBar>
        </Box>
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
