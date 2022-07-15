import './App.css';
/* imports css */
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
/* components */
import Navbar from './components/Navbar';
/* material components */
import {Container} from "@mui/material";
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
          <Navbar/>
      <Container maxWidth="lg" sx={{py: 5}}>
        <ItemListContainer/>
      </Container>
    </div>
  );
}

export default App;
