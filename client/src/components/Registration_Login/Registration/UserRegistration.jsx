import React, { useState } from 'react'
import {
  Form,
  FormGroup,
  Input,
  Button
} from 'reactstrap'
import './UserRegistration.css'
import { registerUser } from '../../../services/service'

function UserRegistration() {
const [user, setUser]= useState({})
  const handleChange = (e) => {
    console.log(e.target.value)
    setUser({...user, [e.target.name]: e.target.value})
    console.log(user)

  }

  // sending axios call to server
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    const res = registerUser(user);
    console.log(res)
    
  }
  return (
    <div className='user-registration-form'>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          {/* user email should be taken from login page email field */}
          <Input
            type='email'
            name='userEmail'
            id='userEmail'
            placeholder='Email'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input 
            type='text'
            name='fullName'
            id='fullName'
            placeholder='Full Name'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='phoneNumber'
            id='phoneNumber'
            placeholder='Phone Number'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='password'
            name='password'
            id='password'
            placeholder='Enter Password'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='password'
            name='confirm_password'
            id='confirm_password'
            placeholder='Re-Enter Password'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="date"
            id="birthDate"
            name="birthDate"
            placeholder="Enter Date Of Birth"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='streetAddress'
            id='streetAddress'
            placeholder='Address'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='city'
            id='city'
            placeholder='City'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='pincode'
            id='pincode'
            placeholder='Pin Code'
            onChange={handleChange}
          />
        </FormGroup>
        <Button>
          Register
        </Button>
      </Form>
        
    </div>
  )
}

export default UserRegistration