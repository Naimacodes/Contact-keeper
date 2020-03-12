import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACT,
  SET_ALERT,
  SET_CURRENT,
  REMOVE_ALERT
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-111',
        type: 'personal'
      },
      {
        name: 'Sara Watson',
        email: 'Sara@gmail.com',
        phone: '222-222-222',
        type: 'personal'
      },
      {
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '333-333-333',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //ADD_CONTACT,

  const addContact= (contact) => {
    contact.id = uuidv4()
    dispatch({type: ADD_CONTACT, payload: contact})
  }



  //CLEAR_CURRENT,
  
  
  
  
  // CLEAR_FILTER,
  
  
  
  
  // UPDATE_CONTACT,
  
  
  
  
  //DELETE_CONTACT,
  const deleteContact= (id) => {
    dispatch({type: DELETE_CONTACT, payload: id})
  }
  
  
  
  //FILTER_CONTACT,
  
  
  
  
  //SET_ALERT,
  
  
  
  
  //SET_CURRENT,
  
  
  
  
  //REMOVE_ALERT


  return (
    <ContactContext.Provider value={{
      contacts: state.contacts,
      addContact,
      deleteContact
    }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
