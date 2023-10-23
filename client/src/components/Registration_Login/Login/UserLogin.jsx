import {
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap'
import './UserLogin.css'
function UserLogin(){
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
                    <div className="enter-password">
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
                    >
                        Submit
                    </Button>
                </Form>

        </div>
    )
}

export default UserLogin;