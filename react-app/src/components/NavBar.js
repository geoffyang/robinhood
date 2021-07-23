
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import Search from './Search';
import './NavBar.css';
const NavBar = () => {
  const user = useSelector(state => state.session.user)

  return (
    <nav>
      <ul className="navbar_contianer">
        <li className="search_bar">
          <Search />
        </li>
        <li className="rewards_button">
         Rewards
        </li>
        <li className="root_page">
            Portfolio
        </li>
        {!user ? (
          <>
            <li>
              <NavLink to="/login" exact={true} activeClassName="active">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/sign-up" exact={true} activeClassName="active">
                Sign Up
              </NavLink>
            </li>
          </>
        ) : null}
        {user ? (
          <li className="logout_button">
            <LogoutButton />
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default NavBar;
