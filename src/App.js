import './App.css';
/* imports css */
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
/* components */
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
/* material components */
import ItemListContainer from './components/ItemListContainer';
/* routing */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './containers/Cart';
import Admin from './containers/Admin';
import CartContextProvider from './contexts/CartContext';
import Home from './containers/Home';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        <Navbar/>

          <Routes>
            <Route 
              path='/' 
              element={<Home/>}
            />
            <Route 
              path='/products' 
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
          <Route 
            path='*' 
            element={<NotFound/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
