import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Stock from './components/Stock';
import Watchlist from './components/Watchlist'
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Portfolio from './components/Portfolio';
import Splash from './components/Splash/Splash'
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import Asset from './components/Asset'

function App() {
  const [loaded, setLoaded] = useState(false);
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>


        <ProtectedRoute path='/asset/:ticker'  >
          <NavBar/>
          <Asset />
        </ProtectedRoute>


        <ProtectedRoute path='/search-results/:searchedTicker' >
          <NavBar />
          <SearchResults />
          <Watchlist />
        </ProtectedRoute>
        {(user) ?
          <ProtectedRoute path='/' exact={true} >
            <NavBar />
            <h1>My Home Page</h1>
            <Stock ticker={'EBAY'} />
            <Portfolio />
            <Watchlist />
          </ProtectedRoute>
        :
          <Route exact path='/'>
            <Splash />
          </Route>
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
