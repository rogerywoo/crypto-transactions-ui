import { Fragment, _Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';


const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> Crypto Transactions </div>
      <nav className={classes.nav}>
        <ul>
        <li>
            <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/sample'>
              Sample
            </NavLink>
          </li>          
          <li>
            <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/welcome'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/ledger'>
              Ledger
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/transactions'>
              Transactions
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default MainHeader;
