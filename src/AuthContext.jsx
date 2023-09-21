import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import { images } from "./images";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

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

        const [searchQuery, setSearchQuery] = useState("");
        const [img, setImg] = useState(images);
        const filteredImages = searchQuery
  ? img.filter((image) =>
      image.tags.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : img;

  const isAuthenticated = () => {
        return !!Cookies.get('refreshToken')
     }

        return <AuthContext.Provider value={{user, setUser, password, setPassword, email, setEmail, err, resp, setErr, setResp, searchQuery, setSearchQuery, img, setImg, filteredImages, isAuthenticated}}>
                {children}
        </AuthContext.Provider>
}

export {AuthContext, AuthProvider};