import {React, useState} from 'react';
import {Button, Card, CardContent, CardHeader, makeStyles, TextField, Typography} from "@material-ui/core";
import {getUser} from "../backendRequests";

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


const LoginCard = ({onSuccess}) => {
    function handleLogin(e) {
        e.preventDefault();

        getUser(nameInput, passwordInput).then(result => {
                //localStorage.setItem('test', 'hello');
                console.log(result);
                setMessage('success! Logging you in');
                console.log(result.data);
                onSuccess(
                    {
                        loggedIn: 'true',
                        username: result.data.username,
                        zip: result.data['zip'],
                    });
            }
        ).catch(e => {
            setMessage('We could not find a username with that password. Try again');
        })
    }

    const [message, setMessage] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card>
                <CardHeader title='Login Here' subheader='If you have an account already, log in here'/>
                <CardContent>
                    <TextField className={classes.form} required id='outlined-required' label='Username'
                               variant="outlined" value={nameInput}
                               onChange={(e) => setNameInput(e.target.value)}/>
                    <TextField required id='password-required' type='password' label='Password' variant="outlined"
                               value={passwordInput}
                               onChange={(e) => setPasswordInput(e.target.value)}/>
                </CardContent>
                <Button variant='contained' onClick={handleLogin}>Log In</Button>
                <Typography>
                    {message}</Typography>
            </Card>
        </div>
    )
};

export default LoginCard;