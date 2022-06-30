import './App.css';
/* components */
import Navbar from './components/Navbar';
/* material components */
import {Container} from "@mui/material";
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
      </header>
      <Container className='container'>
        <ItemListContainer greeting="¡Hey!"/>
      </Container>
    </div>
  );
}

export default App;
