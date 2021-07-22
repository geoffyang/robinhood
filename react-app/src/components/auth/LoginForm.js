import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='loginform-container'>
      <div className='loginform-image'>
        <img src="/robinhood-login-image.jpg"></img>
      </div>
      <div className='loginform'>
        <div className='login'>
          <h1 className='welcome-title'>Welcome to RobinCould</h1>
          <form onSubmit={onLogin}>
            <div className='input-and-label'>
              <label htmlFor='email'>Email</label>
              <input
                name='email'
                type='text'
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div className='input-and-label'>
              <label htmlFor='password'>Password</label>
              <input
                name='password'
                type='password'
                value={password}
                onChange={updatePassword}
              />
            </div>
            <div className='errors'>
              {(errors) ?
                <p>Unable to log in with provided credentials.</p>
                :
                null
              }
            </div>
            <button className='signin-button' type='submit'>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
