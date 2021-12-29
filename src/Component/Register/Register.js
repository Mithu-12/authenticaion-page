import React from 'react';
import './Register.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';
import { useState } from 'react';
import { updateProfile } from '@firebase/auth';
import { Spinner } from 'react-bootstrap';
import { Alert } from '@mui/material';

const Register = () => {
  const location = useLocation()
  const history = useHistory();
  const redirect_url = location.state?.from || '/home'
    const { handleUserRegister, auth, isLoading, user} = useFirebase();
  const alert = [ 'primary']
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setUser] = useState('');
  const [autherror, setautherror] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
    const handleUserName = (e) => {
      setUser(e.target.value);
      console.log(handleUserName);    
  };
  const handleRegistrations = e => {
    if(password.password !== password.password2){
      alert('Your pass does not match');
      return
    }
    e.preventDefault();
    handleUserRegister(email, password, name)
      .then((result) => {
        const info = { ...result.user, displayName: name }
        setUser(info)
        // const newUser = { email, displayName: name }
        // saveUser(newUser)
        saveUser(email, name)
      history.push(redirect_url)
      console.log(result.user);
        const user = result.user;
        setUserName()
        window.location.reload()
        setautherror('')
    })
    .catch((error) => {
      setautherror(error.message);
    });
    console.log(email, password)
  }
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
    .then(result => { })
  }

  const saveUser = (email, displayName) => {
    const user = { email, displayName }
    fetch('http://localhost:5000/user', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
  }

    return (
        <div className='text-center mt-5'>
            <div className='loginForm '>
                <h2>Please Register</h2>
                {/* {errorm} */}
          {!isLoading  && <form onSubmit={handleRegistrations}>
                    <input className='mt-5'onBlur={handleUserName} type="text" placeholder="Enter your name" /><br/>
                    <input className='mt-2' onBlur={handleEmail} type="email" name="" id="" placeholder='Enter Your Email' required/><br />
                    <input className='mt-2' onBlur={handlePassword} type="password" name="password" id="" placeholder='Enter Your Password' required/><br />
                    {/* <input  type="submit" value="Submit" className='btn btn-primary mt-2'/> */}
                    <input className='mt-2' onBlur={handlePassword} type="password" name="password2" id="" placeholder='Re-type Your Password' required/><br />
                    <input  type="submit" value="Submit" className='btn btn-primary mt-2'/>
                </form>}
                {isLoading && <Spinner animation="border" />}
                {user?.email && <Alert severity="success">This is a success alert — check it out!</Alert>
                }
                {autherror && <Alert severity="error">Please Check you email address or password</Alert>}
                <p>Already Account? Please Login <Link to='/login'>Sign In</Link></p>
            </div>
        </div>
    );
};

export default Register;