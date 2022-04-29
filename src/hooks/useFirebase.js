import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";


const auth = getAuth(app);
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