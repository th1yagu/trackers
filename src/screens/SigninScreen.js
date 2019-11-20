import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';


const SigninScreen = () => {
    const { state, signin } = useContext(Context); 
    return (
        <View style={styles.container}>
        <AuthForm
            headerText="Singin to your account"
            onSubmit={signin}
            submitButtonText="Sign In"
            errorMessage={state.errorMessage}
        />
        <NavLink 
            routeName="Signup"
            linkText="Dont have an account? Sign up instead"
        />
        </View>
    );
};

SigninScreen.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SigninScreen;
