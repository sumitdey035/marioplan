import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/SignUp'>Signup</NavLink></li>
      <li><NavLink to='/SignIn'>Signin</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks;