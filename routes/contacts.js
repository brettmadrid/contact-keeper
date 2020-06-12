const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator/check')

// path to user table schema
const User = require('../models/User')
const Contact = require('../models/Contact')

// @route GET api/contacts
// @desc Get all user's contacts
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    // have access to the req.user.id through the auth middleware
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    })
    res.status(200).json(contacts)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ msg: 'server error' })
  }
})

// @route POST api/contacts
// @desc Create a new contact
// @access Private
router.post(
  '/',
  [auth, check('name', 'Name is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, phone, type } = req.body

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id, // from auth middleware
      })

      const contact = await newContact.save()

      res.json(contact)
    } catch (err) {
      console.error(err.message)
      res.status(500).json({ msg: 'Server error' })
    }
  }
)

// @route PUT api/contacts
// @desc Update a contact
// @access Private
router.put('/:id', (req, res) => {
  res.send('Update contact')
})

// @route DELETE api/contacts
// @desc Delete contact
// @access Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact')
})

module.exports = router
