import {
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap'
import './UserLogin.css'
import { useState } from 'react';
function UserLogin(){
    const [button, setButton]=useState({
        type: "Submit",
        passwordFieldHidden:true 
    })
    

    let handleButtonClick = (e)=>{
        setButton({
            type:'Login',
            passwordFieldHidden:false
        }
            )
    }
    
    return(
        <div class='user-login-form'>
            
                <h2>Login</h2>
                <Form>
                    <FormGroup>
                        {/* <Label for='userEmail'>Email</Label> */}
                        <Input
                            id='userEmail'
                            name='userEmail'
                            placeholder='Email'
                            type='email'
                        />
                    </FormGroup>
                    <div className="enter-password" hidden={button.passwordFieldHidden} >
                        <FormGroup >
                            {/* <Label for='password'>Password</Label> */}
                            <Input
                                id='password'
                                name='password'
                                placeholder='password'
                                type='password'
                            />
                        </FormGroup>
                    </div>
                    <Button
                        color="primary"
                        outline
                        onClick={handleButtonClick}
                    >
                        {button.type}
                    </Button>
                </Form>

        </div>
    )
}

export default UserLogin;