import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
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

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  return (
    <ContactContext.Provider value={{}}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
