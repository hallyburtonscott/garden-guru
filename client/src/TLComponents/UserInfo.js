import React, {useContext, useState} from 'react';
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    FormControl,
    FormHelperText,
    makeStyles,
    MenuItem,
    Select,
    TextField
} from "@material-ui/core";
import {UserContext} from "../App";
import {getUser, updateUserPreferences} from "../backendRequests";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
    },
    header: {
        //backgroundColor: theme.palette.primary[400],
        margin: 20,
        maxWidth: 600,
    },
    content: {
        display: 'flex',
        flexDirection: 'column', margin: 30,
        justifyContent: 'center',
        alignContent: 'space-evenly'
    },
    card: {
        maxWidth: 500,
    },

}));
const UserInfo = ({onSuccess}) => {
        const preferences = useContext(UserContext);
        const [message, setMessage] = useState('');
        const [mode, setMode] = useState(preferences.mode || 'light');
        const [change, setChange] = useState(false);
        const [password, setPassword] = useState('');
        const classes = useStyles();
        const [zip, setZip] = useState(preferences.zip || 0);
        const modes = ['light', 'dark'];
        return (
            <div className={classes.root}>
                <Card elevation={3} className={classes.header}>
                    <CardHeader title="User Settings" className={classes.title}/>
                    <CardContent className={classes.content}>
                        <FormControl>
                            <Select value={mode} placeholder='mode' onChange={(e) => setMode(e.target.value)}>
                                {modes.map(mode => (
                                    <MenuItem value={mode}>{mode}</MenuItem>
                                ))
                                }
                            </Select>
                            <FormHelperText>Theme</FormHelperText>
                        </FormControl>


                        <TextField value={zip} type='number' onChange={(e) => setZip((e.target.value))} label={`ZIP code`}/>
                        <TextField type='password' label='Enter Password to Make Changes' value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                        {message}
                        <Button variant='outlined' onClick={() => {
                            const action = async () => {
                                try {
                                    await updateUserPreferences(preferences.username, password, {zip: zip, mode: mode});
                                    //console.log('got here');
                                    const user = await getUser(preferences.username, password);
                                    setMessage('success!');
                                    console.log(user.data['zip']);
                                    onSuccess(
                                        {
                                            loggedIn: 'true',
                                            username: user.data.username,
                                            zip: user.data['zip'],
                                            mode: user.data['mode'],
                                        });
                                    // window.location.reload();
                                    //console.log(user);
                                } catch (e) {
                                    setMessage('This password is incorrect');
                                    console.log(e);
                                }
                                //window.location.reload();
                            }
                            action();
                        }}>Apply Changes</Button>
                        <Button variant='outlined' onClick={() => {
                            localStorage.clear();
                            sessionStorage.clear();
                            window.location.reload();
                        }}>Log Out</Button>
                    </CardContent>
                </Card>

            </div>
        );
    }

;

export default UserInfo;