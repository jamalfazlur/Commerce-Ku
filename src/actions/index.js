/*========================== ACTION CREATOR =========================== */

import axios from 'axios';
import {
    USER_LOGIN_SUCCESS, 
    AUTH_SYSTEM_ERROR, 
    AUTH_LOADING, 
    LOGOUT,
    COOKIE_CHECKED,
    SELECT_PRODUCT
} from './types';
import { KONEKSI } from '../support/config';

// =============================================================================== //
export const onUserLogin = ({ username, password }) => { 

    return (dispatch) => {
        
        dispatch({ type: AUTH_LOADING });

        axios.get(KONEKSI +'/users', {
            params: {
                username,
                password
            }
        }).then((res) => {
            console.log(res);
            
            if(res.data.length > 0){
                dispatch({type: USER_LOGIN_SUCCESS, payload: {username, email: res.data[0].email}})
            } else {
                dispatch({type: AUTH_SYSTEM_ERROR, payload: 'Nama Pengguna atau Kata Sandi Tidak Cocok'})
            }
            
        }).catch((err) => {
            console.log(err)
            dispatch({type: AUTH_SYSTEM_ERROR, payload: 'System Error'})
        })
        
    }
}

// =============================================================================== //

export const cookieChecked = () => {
    return { type: COOKIE_CHECKED }
}

// =============================================================================== //

export const keepLogin = (username) => {
    return (dispatch) => {
        axios.get(KONEKSI +'/users', {
            param: {
                username
            }
        }).then((res) => {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: {email: res.data[0].email, username}
            })
        })
    }
    
}

// =============================================================================== //

export const onUserLogout = () => {
    return ({type: LOGOUT})
}

// =============================================================================== //

export const onUserRegister = ({ username, email, password}) => {
    return (dispatch) => {
        dispatch({ type: AUTH_LOADING });

        if(username === '' || email === '' || password === ''){
            dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'Semua Field Harap Diisi !'})
        } else {
            axios.get(KONEKSI +'/users', {
                params: {
                    username
                }
            }).then((res) =>{
                if(res.data.length === 0){
                    axios.post(KONEKSI +'/users', { username, email, password
                    }).then((res) => {
                        console.log(res);
                        dispatch({type: USER_LOGIN_SUCCESS, payload: {email, username}})
                    }).catch((err)=> {
                        console.log(err);
                        dispatch({type: AUTH_SYSTEM_ERROR, payload: 'System Error'})
                    })
                } else {
                    dispatch({type: AUTH_SYSTEM_ERROR, payload: 'Nama Pengguna Tidak Tersedia'})
                }
                 
            }).catch((err) => {
                console.log(err);
                dispatch({type: AUTH_SYSTEM_ERROR, payload: 'System Error'})
            })

            
        }
        
    }
}