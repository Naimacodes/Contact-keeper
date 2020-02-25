const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Contact = require('../models/Contact');

//@route api/contacts
//@desc get all users contact
//@access private

router.get('/', auth, async (req, res) => {
  try {
    const contacts= await Contact.find({user: req.user.id}).sort({date: -1})
    res.json(contacts)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
    
  }
});

//@route api/contacts
//@desc add new contacts
//@access private
router.post('/', (req, res) => {
  res.send('add contact');
});

//@route api/contacts/:id
//@desc update new contact
//@access private

router.put('/:id', (req, res) => {
  res.send('update contact');
});

//@route api/contacts/:id
//@desc delete a contact
//@access private

router.delete('/:id', (req, res) => {
  res.send('delete a contact');
});

module.exports = router;
