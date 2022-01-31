/** @format */

import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.nav}>
    <NavLink 
      to='/' 
      className={({ isActive }) => `${s.link} ${isActive ? s.activ : ""}`}>
      Home
    </NavLink>
    <NavLink
      to='/cities'
      className={({ isActive }) => `${s.link} ${isActive ? s.activ : ""}`}>
      Cities
    </NavLink>
  </nav>
);
export default Navigation;
