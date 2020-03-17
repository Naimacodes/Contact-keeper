import React from 'react';
import React, { useReducer } from 'react';
import AuthReducer from './authReducer';
import AuthContext from './authContext';
import axios from 'axios';
import {REGISTER_FAIL,
 USER_LOADED,
 AUTH_ERROR,
 LOGIN_SUCCESS,
 LOGIN_FAIL,
 LOGOUT,
 CLEAR_ERRORS,
 REMOVE_ALERT
} from '../types';

const AuthState = props => {
const initialState = {
  token : localStorage.getItem('token'),
  isAuthenticated : null,
  loading: true,
  user: null,
  error: null


};

const [state, dispatch] = useReducer(AuthReducer, initialState);

// Load User
//Checks which user logs in , will hit the auth endpoint and get the data



// register User
//sign the user up, get the token back



//Login User
//Log the user in get the token



// Logout
// Destroys the token logs the user out




// Clear Errors
//clear any errors in the state








return (
<AuthContext.Provider
value={{

  token: state.token,
  isAuthenticated: state.isAuthenticated,
  login: state.login,
  user: state.user,
  error: state.error,



}}

>
{props.children}
</AuthContext.Provider>
)
}


export default AuthState