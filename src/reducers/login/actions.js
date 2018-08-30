import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS ,
    FETCH_LOGIN_ERROR, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_REQUEST } from './constants';
import * as userfetch from '../../utils/fetch';
import { BACKEND_URL } from '../../config/constants';
export function loginRequest() {
    return {
        type : LOGIN_REQUEST,
    } 
}

export function loginError() {
    return {
        type : LOGIN_ERROR,
    }
}

export function loginSuccess(payload) {
    return {
        type : LOGIN_SUCCESS,
        payload
    }
}

export function login(email, picture, name) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const URL = `${BACKEND_URL}/signin`;
            const body = JSON.stringify({email, picture, name});
            console.log(body);
            userfetch.post(URL, body)
            .then(json => {
                if (json && json.token) {
                    console.log(json);
                    const {name, email, avatar, description, userId} = json;
                    localStorage.setItem('name', name);
                    localStorage.setItem('userId', userId);
                    localStorage.setItem('avatar', avatar);
                    localStorage.setItem('email', email);
                    localStorage.setItem('description', description);
                    localStorage.setItem('accessToken', json.token);
                    dispatch(loginSuccess(json));
                    resolve();
                } else {
                    dispatch(loginError);
                    reject();
                }
            
            }).catch(err => console.log(err))
        })
    }
}