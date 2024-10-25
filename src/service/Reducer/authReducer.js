// src/reducers/authReducer.js

const initialState = {
    register: false,
    login: false,
    user: null,
    error: null, // Add error state to handle login errors
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "RegisterSuccess":
        return {
          ...state,
          register: true,
          login: false,
          user: null,
          error: null, // Reset any error
        };
  
      case "LoginSuccess":
        return {
          ...state,
          register: false,
          login: true,
          user: action.payload,
          error: null, // Reset error on success
        };
  
      case "LoginError":
        return {
          ...state,
          error: action.payload, // Handle login error
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  