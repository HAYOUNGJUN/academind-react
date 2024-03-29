import { useState } from 'react';

import Input from './Input.jsx';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvallid = didEdit.email && !isEmail(enteredValue.email);
  //  && isNotEmpty(enteredValue.email);
  const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValue.password, 6);

  function handleSubmit(event) {
    event.preventDefault();

    console.log(enteredValue);
  }

  function handleInputChange(identifier, value) {
    setEnteredValue((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur('email')}
          onChange={(event) => handleInputChange('email', event.target.value)}
          value={enteredValue.email}
          error={emailIsInvallid && 'Please enter a valid email!'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(event) => handleInputChange('password', event.target.value)}
          onBlur={() => handleInputBlur('password')}
          value={enteredValue.password}
          error={passwordIsInvalid && 'Please enter a valid password!'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
