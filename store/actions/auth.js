import { AsyncStorage } from "react-native";

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const AUTOLOGIN = 'AUTOLOGIN';
export const IS_AUTO_LOGIN_ENABLED = 'IS_AUTO_LOGIN_ENABLED';
import consts from '../../consts/consts'



/* export const signUp = (email, password) => {
    return async dispatch => {

        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${consts.googleApi}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        email: email,
                        password: password,
                        returnSecureToken: true
                    }
                )
            });
        const resData = await response.json();

        if (resData.error) {

            throw resData.error.message
        }
        console.log('User created');



    }
} */
export const login = (uid) => {
    return async (dispatch, getState) => {
        const isAutoLoginEnabled = getState().auth.isAutoLoginEnabled;
/* 
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${consts.googleApi}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        email: email,
                        password: password,
                        returnSecureToken: true
                    }
                )
            });
        const resData = await response.json();

        if (!response.ok) {

            throw resData.error.message

        }
 */        if (isAutoLoginEnabled) {
            await AsyncStorage.setItem('userID', uid);
        }
        dispatch({ type: LOGIN, auth: uid })



    }
}


export const logout = () => {
    return async dispatch => {

        await AsyncStorage.removeItem('userID');
        dispatch({ type: LOGOUT })
    }
}

export const autoLogin = (text) => {

    return ({ type: AUTOLOGIN, key: text })
}

export const isAutoLoginEnabled = (text) => {

    return ({ type: IS_AUTO_LOGIN_ENABLED, value: text })
}

