import React, { createContext,useEffect,useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from './../../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const GoogleProvider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);
    const [user,setUser] = useState(null)
    const GoogleUser = ()=>{
        setLoading(true)
        return signInWithPopup(auth,GoogleProvider)
    }
    const createUer = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
     const unsubscrive =    onAuthStateChanged(auth,currentUser=>{
        setLoading(false)
            console.log(currentUser);
            setUser(currentUser)
        })
        return()=>{
            unsubscrive()
        }
    },[])
    const authInfo = {
        user,
        loading,
        GoogleUser,
        createUer,
        login,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;