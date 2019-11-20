import React, { useContext } from 'react'
import { View , StyleSheet} from 'react-native'
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext }  from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.continer}>
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm 
                headerText="Signup Form Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink 
            routeName="Signin"
            linkText="Already have an account? Sign in instead"
             />
        </View>
    );
};

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        justifyContent: 'center', 
        marginBottom: 200
    }
});

SignupScreen.navigationOptions = () => {
    return { header: null };
};

export default SignupScreen;
