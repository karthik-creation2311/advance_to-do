import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../types';
import { saveToLocalStorage, removeFromLocalStorage } from '../../utils/localStorage';

export const login = (username, password) => {
  return (dispatch) => {
    // Simulate authentication
    if (username === 'admin' && password === 'password') {
      const user = { username };
      saveToLocalStorage('user', user);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user
      });
    } else {
      dispatch({
        type: LOGIN_FAILURE,
        payload: 'Invalid credentials'
      });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    removeFromLocalStorage('user');
    dispatch({ type: LOGOUT });
  };
};

export const checkAuth = () => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user
      });
    }
  };
};