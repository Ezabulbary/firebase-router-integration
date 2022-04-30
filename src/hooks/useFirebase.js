import { useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.init";

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                setUser(user)
            })
            .catch(error => {
                console.log(error.massage)
            })
    }

    useEffect( () => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    const handleSignOut = () =>{
        signOut(auth)
        .then(() => {})
    }

    return { user, signInWithGoogle, handleSignOut };
}

export default useFirebase;