import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../componnent/Firebase/firebase.int";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleprovider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleprovider)
      .then((result) => {
        setUsers(result.user);
      })
      .finally(() => setIsLoading(false))
      .catch((error) => {});
  };

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // ...
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetch(`https://damp-everglades-52916.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return {
    user,
    admin,
    isLoading,
    registerUser,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
