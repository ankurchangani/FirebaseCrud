


const initialState = {
  register: false,
  login: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RegisterSuccess':
      return { ...state, register: true, login: false, error: null };
    case 'LoginSuccess':
      return { ...state, register: false, login: true, user: action.payload, error: null };
    case 'LoginError':
      return { ...state, error: action.payload };
    case 'LogoutSuccess':
      return { ...state, login: false, user: null, error: null };
    default:
      return state;
  }
};

export default authReducer;
