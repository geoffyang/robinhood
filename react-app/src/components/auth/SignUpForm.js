
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import SignUpFormContentBlock from './SignUpFormContentBlock';
import './SignUpForm.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className='signupcontainer'>
      <div className='signupcontainerleft'>
        <div className='signuptitle'>
          <h1>RobinCould</h1>
        </div>
        <div>
          <h2>Make Your Money Move</h2>
          <p>RobinCould lets you invest in companies you love, for free.</p>
        </div>
        <div className='formstuff'>
          <p>Please enter your username, your email, and a password!</p>
          <form onSubmit={onSignUp}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div className='inputfields'>
              <div className='usernameandemaildiv'>
                <div>
                  <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    onChange={updateUsername}
                    value={username}
                  ></input>
                </div>
                <div>
                  <input
                    type='text'
                    name='email'
                    placeholder='Email'
                    onChange={updateEmail}
                    value={email}
                  ></input>
                </div>
              </div>
              <div>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={updatePassword}
                  value={password}
                ></input>
              </div>
              <div>
                <input
                  type='password'
                  name='repeat_password'
                  placeholder='Confirm password'
                  onChange={updateRepeatPassword}
                  value={repeatPassword}
                  required={true}
                ></input>
              </div>
            </div>
            <div className='formbuttonssignup'>
              <button type='submit'>Continue</button>
              <div className='formlinklogin'>
                <p>Already started?</p>
                <NavLink to='/login' exact={true} activeClassName='active'>
                  Log in to complete your application
                </NavLink>
              </div>
            </div>
          </form>
          <div className='footer-text'>
            <p>
              All investments involve risk, including the possible loss of principal.
              Investors should consider their investment objectives and risks
              carefully before investing.
            </p>
            <p>
              Commission-free trading means $0 commission trading on self-directed
              individual cash or margin brokerage accounts that trade U.S. listed
              securities via mobile devices or web. Keep in mind, other fees such
              as trading (non-commission) fees, Gold subscription fees, wire transfer
              fees, and paper statement fees may apply to your brokerage account.
              Please see RobinCould Financial’s fee schedule to learn more about
              how none of this exists.
            </p>
            <p>
              Securities trading offered through RobinCould Financial LLC. Brokerage
              clearing services offered through RobinCould Securities, LLC. Both are
              subsidiaries of RobinCould Markets, Inc. as well as fake.
            </p>
            <p>
              Check the background of RobinCould Financial LLC and RobinCould
              Securities, but you won't find anything.
            </p>
            <p>
              This is where you could contact us and we could link you to an FAQ
            </p>
            <p>
              © 2020 RobinCould. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className='signupcontainerright'>
        <SignUpFormContentBlock
          title={'Commission-free trading'}
          content={'Break free from commission-fees and make unlimited commission-free trades in stocks, funds, and options with Robinhood Financial. Other fees may apply. View our fee schedule to learn more.'}
        />
        <SignUpFormContentBlock
          title={'Account Protection'}
          content={'Robinhood Financial is a member of SIPC. Securities in your account protected up to $500,000. For details, please see www.sipc.org.'}
        />
        <SignUpFormContentBlock
          title={'Stay on top of your portfolio'}
          content={'Set up customized news and notifications to stay on top of your assets as casually or as relentlessly as you like. Controlling the flow of info is up to you.'}
        />
      </div>
    </div>
  );
};

export default SignUpForm;
