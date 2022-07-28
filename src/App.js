import './App.css';
/* imports css */
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
/* components */
import Navbar from './components/Navbar';
/* material components */
import {Container} from "@mui/material";
import ItemListContainer from './components/ItemListContainer';
/* routing */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Admin from './components/Admin';
import CartContextProvider from './contexts/CartContext';


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        <Navbar/>

        <Container data-barba="container" data-barba-namespace="home" maxWidth="xl" sx={{py: 5, color: "#fff"}}>
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
            <Route 
              path='/cart' 
              element={<Cart/>}
            />
            <Route 
              path='/admin' 
              element={<Admin/>}
            />
          </Routes>
        </Container>

      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
