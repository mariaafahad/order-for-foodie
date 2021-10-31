import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { initializeAuthentication } from "../Firebase/firebase.init";
import { UserContext } from "../App";


initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useContext(UserContext);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // console.log(result.user);
                setUser(result.user)
                if (result) {
                    history.replace(from);
                }
            })
            .catch(error => {
                setError(error.massage);
            })

    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside', user);
                setUser(user)
            }
        })
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
    }
}
export default useFirebase;
