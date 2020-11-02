import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/page1">Page1</NavLink>
          <NavLink to="/page2">Page2</NavLink>
          <NavLink to="/page3">Page3</NavLink>
       </div>
    );
}
 
export default Navigation;