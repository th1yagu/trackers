import {AsyncStorage } from 'react-native';
import CreateDataContext from './CreateDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action ) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clear_error_message': 
            return { ...state, errorMessage: '' };
        default: 
        return state; 

    }
};

const signup = dispatch => {
    return async ({ email, password}) => {
        try{
            const response = await trackerApi.post('/signup', {email, password}); 
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token });
            navigate('TrackList');
        }
        catch(err){
            dispatch({ type: 'add_error', payload:'Something went wrong with Sign up'})
        }
    };
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message'}); 
}; 

const signin = dispatch => async ({ email, password }) => {
        try{
            const response = await trackerApi.post('/signin', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token });
            navigate('TrackList');
        }
        catch (err){
            console.log('enter in catch '+ err);
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with sing in'
            });
        }
    };


export const {  Provider, Context } = CreateDataContext(
    authReducer,
    {signup, signin, clearErrorMessage},
    {token: null, errorMessage: '' }

);