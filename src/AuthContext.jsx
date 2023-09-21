import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [err, setErr] = useState('');
        const [resp, setResp] = useState("");

        const [user, setUser] = useState({
                password: "",
                email: ""
              });


        return <AuthContext.Provider value={{user, setUser, password, setPassword, email, setEmail, err, resp, setErr, setResp}}>
                {children}
        </AuthContext.Provider>
}

export {AuthContext, AuthProvider};