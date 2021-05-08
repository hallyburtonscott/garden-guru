import React from 'react';
import LoginCard from "../MiddleComponents/LoginCard";
import {Button} from "@material-ui/core";
import {updateUserPreferences} from "../backendRequests";
import SignUpCard from "../MiddleComponents/SignUpCard"


const SignUp = ({onSuccess}) => {
        return (
            <div>
                <SignUpCard onSuccess={onSuccess}/>
            </div>

        )
    }

;

export default SignUp;
