

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '../../fierbase';
import { setDoc, doc } from 'firebase/firestore';

const registerSuccess = () => ({ type: 'RegisterSuccess' });
const loginSuccess = (user) => ({ type: 'LoginSuccess', payload: user });
const loginError = (error) => ({ type: 'LoginError', payload: error });



export const registerAction = (data) => async (dispatch) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), { name: data.name, email: data.email, uid: user.uid });
    dispatch(registerSuccess());
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

export const loginAction = (email, password) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    const user = userCredential.user;
    
    localStorage.setItem("userID", user.uid); // Store user ID in localStorage
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const signoutAction = () => async (dispatch) => {
    try {
      await signOut(auth);

      localStorage.removeItem("userID"); 
      dispatch({ type: 'LogoutSuccess' });


    } catch (error) {

      console.error("Error signing out:", error);
    }
  };
  
