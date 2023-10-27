import {
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap'
import './UserLogin.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {isEmailRegistered, userLogin} from '../../../services/service';
function UserLogin(){
    const [button, setButton]=useState({
        type: "Submit",
        passwordFieldHidden:true 
    })
    // // created dumy user for test purpose
    // const dummyUser = {
    //     userEmail: "test@example.com"
    // }
    const [user, setUser]= useState({})
    
    const navigate = useNavigate()

    let handleButtonClick = (e)=>{

        if(button.type==='Register'){
            navigate('/register')
        }
        if(isEmailRegistered(user.userEmail)){
            console.log(isEmailRegistered("loginPage: ",user.userEmail))
            setButton({
                type:'Login',
                passwordFieldHidden:false
            }
                )
        }
        else if(button.type === "Login"){
            const result = userLogin(user);
            console.log(result);
        }
        else{
            setButton({
                type:'Register',
                passwordFieldHidden:true
            }
                )
        }
    }
    const handleChange = (e)=>{
        setUser({...user,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log()
    }
    
    return(
        <div class='user-login-form'>
            
                <h2>Login</h2>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        {/* <Label for='userEmail'>Email</Label> */}
                        <Input
                            id='userEmail'
                            name='userEmail'
                            placeholder='Email'
                            type='email'
                            onChange={handleChange}
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
                                onChange={handleChange}
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
                    {/* <Link to='register'>Registration</Link> */}
                </Form>
            </div>
    )
}

export default UserLogin;