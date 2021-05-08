import {Button, Card, CardContent, CardHeader, makeStyles, TextField, Typography} from "@material-ui/core";
import {React, useState} from "react";
import {createUser} from "../backendRequests";

const useStyles = makeStyles((theme) => {
    return ({
        root: {
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: 345,
            minWidth: 200,
        },
        form: {
            margin: theme.spacing(1),
        }
    })
});


const SignUpCard = ({onSuccess}) => {
    function handleLogin(e) {
        e.preventDefault();

        createUser( 'Scott' , 'Hallyburton', emailInput, phoneInput, nameInput, passwordInput).then(result => {
                setMessage('Account Created Successfully!');
                onSuccess(
                    {
                        loggedIn: 'true',
                        username: nameInput,
                        password: passwordInput,
                        email: emailInput,
                        phone: phoneInput,
                    });
            }
        ).catch(e => {
            setMessage('Username and or Email already exists, try again');
        })
    }

    const [message, setMessage] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card>
                <CardHeader title='Create A New Account' subheader='Get planting today!'/>
                <CardContent>
                    <TextField className={classes.form} required id='outlined-required' label='Username'
                               variant="outlined" value={nameInput}
                               onChange={(e) => setNameInput(e.target.value)}/>
                    <TextField required id='password-required' type='password' label='Password' variant="outlined"
                               value={passwordInput}
                               onChange={(e) => setPasswordInput(e.target.value)}/>
                    <TextField required id='outlined-required' label='Email' variant="outlined"
                               value={emailInput}
                               onChange={(e) => setEmailInput(e.target.value)}/>
                    <TextField required id='outlined-required' label='Phone Number' variant="outlined"
                               value={phoneInput}
                               onChange={(e) => setPhoneInput(e.target.value)}/>
                </CardContent>
                <Button variant='contained' onClick={handleLogin}>Log In</Button>
                <Typography>
                    {message}</Typography>
            </Card>
        </div>
    )
};

export default SignUpCard;