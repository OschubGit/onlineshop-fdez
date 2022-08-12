import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { MdMenu } from "react-icons/md";
import { categories } from '../../utils/categories';
import SocialMedia from '../SocialMedia';
import { Link } from 'react-router-dom';
import { nav } from "../../utils/nav";
import { NavLink } from 'react-router-dom';

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
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <div className='gridNavigation' style={{marginTop: "150px"}}>
          <Link to={"/products"}>
            <p>Todas las categorias</p>
          </Link>
        <ul className='navigation'>
          {categories.map((c, index) => (
          <li className='navigation_item' key={index}><NavLink to={`/category/${c.category}`}>{c.category}</NavLink></li>
          ))}
        </ul>
        <div className='gridNavigation_login'>
        {nav.map((m, index) => (
          <span
            key={index}
          >
            <Link
              to={"/"}
              color="inherit"
              underline="none"
            >
              {m.item}
            </Link>
          </span>
        ))}
        </div>
        <div className='gridNavigation_social'> 
          <SocialMedia/>
        </div>
        </div>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MdMenu onClick={toggleDrawer(anchor, true)} style={{padding: "0 24px", cursor: "pointer"}} fontSize={"24px"} color={"black"} id="drawerIdClicable"/>
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
