import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext'
import { CLEAR_CURRENT } from '../../context/types';

const ContactsItem = ({ contact }) => {
  
  const contactContext = useContext(ContactContext)
  const {deleteContact, setCurrent, clearCurrent} = contactContext;

  const { id, name, email, phone, type } = contact;
  
  const onDelete = (e) => {
    deleteContact(id)
  }
  
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}
        {'  '}{' '}
        <span
          style={{ float: 'right' }}
          className={
            type === 'professional'
              ? ' badge badge-success'
              : 'badge badge-primary'
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open'></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone'></i> {phone}
          </li>
        )}
      </ul>
      <p className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>Edit</p>
      <p className="btn btn-danger btn-sm" onClick={onDelete, ()=> clearCurrent() }>Delete</p>

    </div>
  );
};


ContactsItem.propTypes={
  contact : PropTypes.object.isRequired,
}
export default ContactsItem;
