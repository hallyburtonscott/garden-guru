import React from 'react';
import LoginCard from "../MiddleComponents/LoginCard";
import {Button} from "@material-ui/core";
import {updateUserPreferences} from "../backendRequests";
import {Link} from 'react-router-dom'

const Login = ({onSuccess}) => {
        return (
            <div>
                <LoginCard onSuccess={onSuccess}/>
                {/*<Button variant='outlined'><Link to='/'> HOME</Link></Button>*/}
            </div>

        )
    }

;

export default Login;