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

  let splashPage
  if (user) {
    splashPage = (<ProtectedRoute path='/' exact={true} >
      <h1>My Home Page</h1>
      <Stock ticker={'EBAY'} />
      {/* <Watchlist /> */}
    </ProtectedRoute>)
  } else {
    splashPage = (<Route exact path='/'>
      <Splash />
    </Route>)
  }

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
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
        <ProtectedRoute path='/search-results/:searchedTicker' >
          <SearchResults />
          <Watchlist />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>

      {splashPage}

        <ProtectedRoute path='/portfolio' exact={true}>
          <Portfolio />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
