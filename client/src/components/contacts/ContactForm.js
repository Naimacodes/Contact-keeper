import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const {addContact, current, clearCurrent} = contactContext

  useEffect(() => {
    if(current !== null){
      setContact(current)
    }else{
      setContact({
      
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      })
    }
  }, [contactContext, current])

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    addContact(contact);
    setContact({
      
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    });
  };

  const clearAll= () => {
    clearCurrent()
  }

  const { name, email, phone, type } = contact;
  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>{current !== null ? 'Edit Contact' : 'Add Contact'}</h2>
      <input
        type='text'
        placeholder='name'
        name='name'
        value={name}
        onChange={onChange}
      ></input>
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      ></input>
      <input
        type='text'
        placeholder='phone'
        name='phone'
        value={phone}
        onChange={onChange}
      ></input>



      <h5>Contact type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />
      Personal{''}
      {''}
      {''}
      {''}






      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />
      Professional{''}
      {''}
      <div>
        {' '}
        <input
          type='submit'
          value={current !== null ? 'Edit Contact' : 'Add Contact'}
          className='btn btn-primary'
        />{' '}
      </div>
      <div className="btn btn-light btn-block" onClick={clearAll}>Clear</div>
    </form>
  );
};

export default ContactForm;
