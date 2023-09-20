import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import Header from '../components/Header';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import { auth } from '../firebase';

const SignUp = () => {
        const [loading, setLoading] = useState(false);
        const {email, password, setEmail, setPassword} = useContext(AuthContext);
        let available;
        if(email && password) {
                available = false;
        }else{
                available = true
        }

        const handleSubmit = (e) => {
                e.preventDefault();
                setLoading(true);
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                // Signed in 
                setLoading(false);
                const user = userCredential.user;
                console.log(user);

                })
                .catch((error) => {
                        setLoading(false);
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage);
                });
        }

        
  return (
        <div>
        {loading ? 
                <div id="preloader">
                   <div id="preloaderinner"></div>
                </div>
                : 
                <div className="regiser">
        
                  <Header content="Login"/>
        
                  <div className="flex h-[100vh] items-center justify-center">
                  <div className="flex flex-col w-[400px] m-auto p-[2rem] bg-[#fff]">
                    <h1 className="h1">Create an account</h1>
                    {/* <h1 className={err !== '' ? styles.err : styles.hi}>{err}</h1> */}
                     <form action="">
                      <div>
                       <label htmlFor="email"> Email address </label>
                       <input 
                       type="text"
                       id="email"
                       name="email"
                       value={email}
                       placeholder="you@example.com"
                       onChange={(e) => setEmail(e.target.value)}
                       />
                      </div>
          
                      <div>
                       <label htmlFor="password"> Password </label>
                       <input 
                       type="password"
                       id="password"
                       name="password"
                       value={password}
                       placeholder="create a password"
                       onChange={(e) => setPassword(e.target.value)}
                       />
                      </div>
                       <button 
                       className={available ? "btnnn" : "btn"}
                       onClick={handleSubmit}
                       disabled={available}>Sign up</button>
                     </form>
                     <h4>Forgot password?</h4>
                     <div className="or">
                      <div className="line"></div>
                      <p>Or</p>
                      <div className="line"></div>
                     </div>
                     <p>Sign up with:</p>
                     <div className="auth">
                      <button 
                      className="btn">
                        <img src={google} alt="google" />
                        Google
                      </button>
                      <button className="btn">
                        <img src={apple} alt="apple" /> Apple
                      </button>
                     </div>
                  </div>
                </div>
                </div>
               }
            </div>
  )
}

export default SignUp