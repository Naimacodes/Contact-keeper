import React from 'react';
import React, { useReducer } from 'react';
import AuthReducer from './authReducer';
import AuthContext from './authContext';
import axios from 'axios';
import {} from '../types';

const Authstate = props => {
const initialState = {

};

const [state, dispatch] = useReducer(AuthReducer, initialState);


return (
<AuthContext.Provider
value={{}}

>
{props.children}
</AuthContext.Provider>
)
}


export default Authstate