import React, { useReducer } from 'react';
import AuthReducer from './authReducer';
import AuthContext from './authContext';
import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
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
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Load User
  //Checks which user logs in , will hit the auth endpoint and get the data

  const loadUser = async () => {
    //load token into global header

    try {
      //checks if you're a valid user
      const res = await axios.get('/api/auth')
      dispatch({type: USER_LOADED, payload: res.data})

    } catch (error) {
      dispatch({type: AUTH_ERROR})
    }
  }

  // register User
  //sign the user up, get the token back

const register = async formData => {
  const config = {
    headers: {
      'Content-Type' : 'application/json'
    }
  }
  try {
    const res = await axios.post('/api/users', formData, config)
    dispatch({type: REGISTER_SUCCESS, payload : res.data })
    // the response is going to be the token
    
  } catch (error) {
    dispatch({type: REGISTER_FAIL, payload : error.response.data.msg})
    
  }
}




  //Login User
  //Log the user in get the token


  const loginUser = () => {console.log('login user')}

  // Logout
  // Destroys the token logs the user out

  
  const logout = () => {console.log('logout')}


  // Clear Errors
  //clear any errors in the state


  const clearErrors = () => {dispatch({type:CLEAR_ERRORS, })}

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        login: state.login,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        loginUser,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
