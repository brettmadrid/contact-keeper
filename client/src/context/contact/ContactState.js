import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types'

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Ashley Owens',
        email: 'Ashley@gmail.com',
        phone: '222-222-2222',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Arpita Sinha',
        email: 'Arpita@gmail.com',
        phone: '222-222-3333',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Hannah Tuttle',
        email: 'Hannah@gmail.com',
        phone: '222-222-4444',
        type: 'personal',
      },
    ],
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contact

  // Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
