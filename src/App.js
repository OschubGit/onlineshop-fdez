import './App.css';
/* imports css */
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
/* components */
import Navbar from './components/Navbar';
/* material components */
import {Container} from "@mui/material";
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';
/* routing */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>

        <Container maxWidth="xl" sx={{py: 5, color: "#fff"}}>
          <Routes>
            <Route 
              path='/' 
              element={<ItemListContainer/>}
            />
            <Route 
              path='/category/:category' 
              element={<ItemListContainer/>}
            />
            <Route 
              path='/item/:id' 
              element={<ItemDetailContainer/>}
            />
          </Routes>
        </Container>

      </div>
    </BrowserRouter>
  );
}

export default App;
