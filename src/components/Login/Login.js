import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setisLogin] = useState(false);
    const location = useLocation();
    const histoiry = useHistory();
    const redirect_uri = location.state?.form || '/';
    const {signInWithGoogle} = useAuth();
    const auth = getAuth();
    const handleGoogleLogin = () =>{
        signInWithGoogle()
        .then(result =>{
            histoiry.push(redirect_uri)
         })
    }

    const handleEmail = e =>{
        setEmail(e.target.value);
      }
      const handlePassword = e =>{
        setPassword(e.target.value);
      }
      const handleRegister = e =>{
        e.preventDefault();
    
        if(password.length<6){
          setError("Password Must be at least 6 charachter");
          return;
        }
        if(!/(?=.*[A-Z])/.test(password)){
          setError("Password must be contain one uppercase");
          return;
        }
        isLogin?processLogin(email,password):registerUser(email,password);
      }
    
      const toggleLogin = e =>{
        setisLogin(e.target.checked);
      }
      const registerUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          setError('');
        })
        .catch(error =>{
          setError(error.message)
        })
        console.log(email, password);
      }
    
      const processLogin =(email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
        })
        .catch(error =>{
          setError(error.code)
        })
      }
    return (
        <div>
            <form onSubmit={handleRegister} className="m-5">
            <h3 className="text-primary mb-3 text-center">Please {isLogin? 'Login' :'Register Here'}</h3>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" onBlur={handleEmail} required/>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" onBlur={handlePassword} required/>
            </div>
          </div>
          <div className="row mb-3 ">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
                <label className="form-check-label" htmlFor="gridCheck1">
                  Are You Already Reigster?
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-3 col-sm-10 offset-sm-2 text-danger">{error}</div>
          <button type="submit" className="btn btn-primary">{isLogin?'Login':'Register'}</button>
        </form>

            <div>=======or==========</div>
            <Button onClick={handleGoogleLogin} variant="success">Login With Google</Button>
        </div>
    );
};

export default Login;