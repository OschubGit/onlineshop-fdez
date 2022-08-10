import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { categories } from '../../utils/categories';
import SocialMedia from '../SocialMedia';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <div className='gridNavigation' style={{marginTop: "150px"}}>
        <p>Todas las categorias</p>
        <ul className='navigation'>
          {categories.map((c, index) => (
          <li className='navigation_item' key={index}><Link to={`/category/${c.category}`}>{c.category}</Link></li>
          ))}
        </ul>
        <div className='gridNavigation_social'> 
          <SocialMedia/>
        </div>
        </div>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{color: "#000"}} id="drawerIdClicable"/></Button>
          <Drawer
            elevation={0}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
