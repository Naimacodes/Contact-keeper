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

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
      contacts: [...state.contacts, action.payload]
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        something: action.payload,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        something: action.payload,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        something: action.payload,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
    case FILTER_CONTACT:
      return {
        ...state,
        something: action.payload,
      };
    case SET_ALERT:
      return {
        ...state,
        something: action.payload,
      };
    case SET_CURRENT:
      return {
        ...state,
        something: action.payload,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        something: action.payload,
      };

    default:
      return {
        ...state
      };
  }
};
