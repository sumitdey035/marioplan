import React from 'react';
import { NavLink } from 'react-router-dom';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/SignUp'>Signup</NavLink></li>
      <li><NavLink to='/SignIn'>Signin</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks;