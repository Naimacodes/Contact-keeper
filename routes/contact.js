const express = require('express');
const router = express.Router();

//@route api/contact
//@desc get all users contact
//@access private

router.get('/', (req, res) => {
  res.send('get all contacts');
});

//@route api/contact
//@desc add new contacts
//@access private
router.post('/', (req, res) => {
  res.send('add contact');
});

//@route api/contact/:id
//@desc update new contact
//@access private

router.put('/:id', (req, res) => {
  res.send('update contact');
});

//@route api/contact/:id
//@desc delete a contact
//@access private

router.delete('/:id', (req, res) => {
  res.send('delete a contact');
});

module.exports = router;
