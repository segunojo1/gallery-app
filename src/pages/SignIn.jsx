import React, { useState } from 'react'
import Header from '../components/Header';
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const {email, password, setPassword, setEmail, err, setErr, resp, setResp} = useContext(AuthContext);
  let available;
  const navigate = useNavigate();

  if(password && email) {
   available = false;
  }else{
   available = true
  }
  const handleSubmit =  (e) => {
    e.preventDefault();
    setLoading(true);
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    setLoading(false);
    const user = userCredential.user;
    console.log(user);
    setResp('Login Successful!');
    navigate('/');
  })
  .catch((error) => {
    setLoading(false);
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log(errorMessage, errorCode);
    setErr(errorMessage)
  });
   setEmail("");
   setPassword("");
 }

  return (
        <div>
        {
          loading ? 
          <div id="preloader">
          <div id="preloaderinner"></div>
       </div>
       : 
  
       <div className="register">
        <Header content="Create account"/>
        <div className="flex h-[100vh] items-center justify-center">
          <div className="flex flex-col w-[400px] m-auto p-[2rem]">
            <h1 className="h1">Login to your account</h1>
            <h1 className={err !== '' ? "err" : "hi"}>{err}</h1>
            <h1 className={resp !== '' ? "resp" : "hi"}>{resp}</h1>
             <form action="">
              <div>
               <label htmlFor="email"> Email address </label>
               <input 
               type="text"
               id="email"
               value={email}
               placeholder="Enter Email or username"
               onChange={(e) => setEmail(e.target.value)} />
              </div>
  
              <div>
               <label htmlFor="password"> Password </label>
               <input 
               type="password"
               id="password"
               value={password}
               placeholder="Enter password"
               onChange={(e) => setPassword(e.target.value)} />
              </div>
               <button className={available ? "btnnn" : "btn"} onClick={handleSubmit} disabled={available}>Login</button>
             </form>
             <h4>Forgot password?</h4>
             <div className="or">
              <div className="line"></div>
              <p>Or</p>
              <div className="line"></div>
             </div>
             <p>Log in with:</p>
             <div className="auth">
              <button 
              className="btn"
              >
                <img src={google} alt="google" />
                Google
              </button>
              <button className="btn">
                <img src={apple} alt="apple" />Apple
              </button>
             </div>
          </div>
        </div>
      </div>
        }
      </div>
  )
}

export default SignIn