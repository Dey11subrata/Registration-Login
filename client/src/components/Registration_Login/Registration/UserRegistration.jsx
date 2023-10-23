import React from 'react'
import {
  Form,
  FormGroup,
  Input,
  Button
} from 'reactstrap'

function UserRegistration() {
  return (
    <div className='user-registration-form'>
      <Form>
        <FormGroup>
          <Input
            type='email'
            name='userEmail'
            id='userEmail'
            placeholder='Email'
          />
        </FormGroup>
        <FormGroup>
          <Input 
            type='text'
            name='fullName'
            id='fullName'
            placeholder='Full Name'
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='phoneNumber'
            id='phoneNumber'
            placeholder='Phone Number'
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='password'
            name='password'
            id='password'
            placeholder='Enter Password'
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='password'
            name='confirm_password'
            id='confirm_password'
            placeholder='Re-Enter Password'
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="datetime"
            id="birthDate"
            name="birthDate"
            placeholder="Enter Date Of Birth"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='streetAddress'
            id='streetAddress'
            placeholder='Address'
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='city'
            id='city'
            placeholder='City'
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='pincode'
            id='pincode'
            placeholder='Phone Number'
          />
        </FormGroup>
      </Form>
        
    </div>
  )
}

export default UserRegistration