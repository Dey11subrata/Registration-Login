import {
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap'
function UserLogin(){
    return(
        <div>
            
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
                    <FormGroup >
                        {/* <Label for='password'>Password</Label> */}
                        <Input
                            id='password'
                            name='password'
                            placeholder='password'
                            type='password'
                        />
                    </FormGroup>
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