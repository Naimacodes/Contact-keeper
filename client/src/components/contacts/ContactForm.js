import React, { useState } from 'react';

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const { name, email, phone, type } = contact;
  return (
    <form>
      <h2 className='text-primary'>Add Contact</h2>
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
        placeholder='type'
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
        placeholder='type'
        name='type'
        value='professional'
        checked={type === 'professional '}
        onChange={onChange}
      />
      Professional{''}
      {''}
      <div>
        {' '}
        <input
          type='submit'
          value='Add Contact'
          className='btn btn-primary'
        />{' '}
      </div>
    </form>
  );
};

export default ContactForm;
