import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,
    onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import InitializeAutentication from "../components/Login/Firebase/firebase.init";

InitializeAutentication();
const useFirebase =() =>{
    const [user, setUser] = useState({});
    const[isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const signInWithGoogle =() =>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
         return signInWithPopup(auth,googleProvider)
        
            .finally(()=>{
                setIsLoading(false)
            })
        ;
    }
   useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth, user=>{
           if(user){
               setUser(user)
           }
           else{
               setUser({})
           }
           setIsLoading(false)
       });
       return () => unsubscribed;
   },[])

    const logOut = () =>{
        signOut(auth)
        .then(()=>{

        })
        .finally(()=>{
            setIsLoading(false)
        })
    }
    return {
        user,
        isLoading,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;