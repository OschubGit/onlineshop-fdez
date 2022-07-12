import './App.css';
/* components */
import Navbar from './components/Navbar';
/* material components */
import {Container} from "@mui/material";
/* import ItemListContainer from './components/ItemListContainer'; */
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
      </header>
      <Container className='container'>
        {/* <ItemListContainer greeting="¡Hey!"/> */}
        <ItemCount/>
      </Container>
    </div>
  );
}

export default App;
