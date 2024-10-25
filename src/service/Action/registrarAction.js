


import { createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import  { auth } from "../../fierbase";

import { db } from "../../fierbase"; 

import { setDoc, doc } from "firebase/firestore";


const RegistrarSuccess = () => {
    return {
        type: 'RegistrarSuccess"',
    }
}

const LoginSuccess = (user) => ({
    type: 'LoginSuccess',
    payload: user,
});

const LoginError = (error) => ({
    type: 'LoginError',
    payload: error,
});



export const registrarAction = (data) => {
    return async (dispatch) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                name: data.name,
                email: data.email,
                uid: user.uid
            });

            console.log("User registered and data stored:", user);

            dispatch(RegistrarSuccess(user))
           

        } catch (err) {
            console.log("Error registering user:", err);
           
        }
    };
};


export const loginAction = (email, password) => {
    return async (dispatch) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            dispatch(LoginSuccess(user));
        } catch (error) {
            dispatch(LoginError(error.message));
        }
    };
};

