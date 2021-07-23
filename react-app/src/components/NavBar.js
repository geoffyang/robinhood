
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import Search from './Search';

const NavBar = () => {
  const user = useSelector(state => state.session.user)

  return (
    <nav>
      <ul className='navbar contianer'>
        <li>
          <Search />
        </li>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>


        <li>
          <NavLink to='/asset/MSFT' >
            MSFT
          </NavLink>
        </li>
        
        <li>
          <NavLink to='/asset/CMG' >
            CMG
          </NavLink>
        </li>


        {(!user) ?
          <>
            <li>
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
              </NavLink>
            </li>
          </>
          :
          null
        }
        {(user) ?
          <li>
            <LogoutButton />
          </li>
          :
          null
        }
      </ul>
    </nav>
  );
}

export default NavBar;
