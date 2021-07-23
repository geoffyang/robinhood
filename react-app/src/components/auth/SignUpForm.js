import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import "./SignUpForm.css";
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
    <div className="master-div">
      <div id="signup_form_container">
        <form onSubmit={onSignUp}>
          <div className="error_field">
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className="row_one">
            <div className="user_name">
              <input
                type="text"
                name="username"
                onChange={updateUsername}
                value={username}
                placeholder="Username"
              ></input>
            </div>
          </div>
          <div className="row_two">
            <div className="email_field">
              <input
                type="text"
                name="email"
                onChange={updateEmail}
                value={email}
                placeholder="Email"
              ></input>
            </div>
          </div>
          <div className="row_three">
            <div className="password_field">
              <input
                type="password"
                name="password"
                onChange={updatePassword}
                value={password}
                placeholder="Password (min. 10 characters)"
              ></input>
            </div>
          </div>
          <div className="row_four">
            <div className="verify_password">
              <input
                type="password"
                name="repeat_password"
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
                placeholder="Password verification"
              ></input>
            </div>
          </div>
          <div className="row_five">
            <button id="sign_up" className="sign_up_button" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
      <div id="signup_form_container_two">
        <h1>hi</h1>
      </div>
    </div>
  );
};

export default SignUpForm;
