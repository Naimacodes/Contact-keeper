const express = require('express');
const router = express.Router();

//@route api/contacts
//@desc get all users contact
//@access private

router.get('/', (req, res) => {
  res.send('get all contacts');
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
