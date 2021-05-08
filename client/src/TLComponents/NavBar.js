import React, {useContext} from 'react';
import {AppBar, Button, ButtonGroup, Icon, makeStyles, Toolbar, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu"
import {Link} from "react-router-dom";
import {UserContext} from '../App.js'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        justifyContent: "center",
        flexGrow: 1,
    },
    userIcon: {
        backgroundColor: theme.palette.tertiary[200],
    },
    mainAction: {
        marginRight: 50,
        backgroundColor: theme.palette.primary[200],
    },
    appBar: {
        padding: 30,
    },
    pageButtons:{
        fontSize: 30,
    }

}));
const NavBar = (props) => {
    const preferences = useContext(UserContext);
    if (preferences.loggedIn == false) {
        //console.log('you are not logged in');
    } else {
        //console.log('now you ARE logged in!');
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                        <Typography variant='h4' className={classes.title}>
                            <Link to='/' style={{textDecoration: 'none'}}>
                            Garden Guru
                            </Link>
                        </Typography>

                    <ButtonGroup spacing={20} className={classes.mainAction}>
                        <Button label='Search For Plants'><Link to='/search' style={{textDecoration: 'none'}}> Search
                            For Plants </Link></Button>
                        {preferences.loggedIn &&
                        <Button><Link to={`/users/${preferences.username}`} style={{'textDecoration': 'none'}}>My
                            Garden </Link></Button>}
                    </ButtonGroup>
                    {(preferences.loggedIn ?
                        <Typography className={classes.pageButtons}>
                            <Link to={`/users/${preferences.username}/info`} style={{textDecoration: 'none'}}>
                                <IconButton className={classes.userIcon} >
                                    <Icon>
                                        {(preferences.username ? preferences.username[0] : '')}
                                    </Icon>
                                </IconButton>
                            </Link>
                        </Typography> : <ButtonGroup spacing={2}>
                            <Link to='/login'> <Button color='secondary' variant='contained'> Login </Button></Link>
                            <Link to='/signup'><Button color='secondary' variant='contained'>Signup</Button></Link>
                        </ButtonGroup>)
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;