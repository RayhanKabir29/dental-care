import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const histoiry = useHistory();
    const redirect_uri = location.state?.form || '/';
    const {signInWithGoogle} = useAuth();

    const handleGoogleLogin = () =>{
        signInWithGoogle()
        .then(result =>{
            histoiry.push(redirect_uri)
         })
    }
    return (
        <div>
            <h2>Please Log in Here</h2>
            <Button onClick={handleGoogleLogin} variant="success">Login With Google</Button>
        </div>
    );
};

export default Login;