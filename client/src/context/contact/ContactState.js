import React, { useReducer } from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import axios from 'axios';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  CLEAR_CONTACTS,
  FILTER_CONTACT,
  CONTACT_ERROR,
  SET_CURRENT
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //GET_CONTACTS

  const getContacts = async () => {
    try {
      const res = await axios.get('/api/contacts');

      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
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
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
    }
  };

  //CLEAR_CONTACTS,

  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
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
  const deleteContact = async id => {
    try {
      const res = await axios.delete(`/api/contacts/${id}`);
      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.response.msg })
    }
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
        clearFilter,
        getContacts,
        clearContacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
