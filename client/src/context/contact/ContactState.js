import React, { useReducer } from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import axios from 'axios';
import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACT,
  CONTACT_ERROR,
  SET_CURRENT
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [],
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //GET_CONTACTS

  const getContacts = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.get('/api/contacts');
      dispatch({ type: GET_CONTACTS, payload: res.data });
      console.log(res.data);
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
    }
  };

  //ADD_CONTACT,

  const addContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/contacts', contact, config);
      dispatch({ type: ADD_CONTACT, payload: res.data });
      console.log(res.data);
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
    }
  };

  //CLEAR_CURRENT,

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // CLEAR_FILTER,

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // UPDATE_CONTACT,
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  //DELETE_CONTACT,
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //FILTER_CONTACT,

  const filterContact = text => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };

  //SET_CURRENT,

  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //REMOVE_ALERT

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        deleteContact,
        clearCurrent,
        setCurrent,
        updateContact,
        filterContact,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
