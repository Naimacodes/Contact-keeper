const express= require('express')
const router = express.Router()

//@route api/auth
//@desc  get logged in users
//@access private

router.get('/', (req, res) => {
  res.send('get logged in users')
})


//@route api/auth
//@desc auth user and get token
//@access  public

router.post('/', (req,res) => {
  res.send('auth user and get token')
})

module.exports = router