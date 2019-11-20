import React, { useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <Spacer>
                <Text h3>{ headerText}</Text>
            </Spacer>
            <Input label="Email" 
            autoCapitalize="none"
            autoCorrect={false}
            value={email} onChangeText={ setEmail}/>
            <Spacer />
            <Input label="Password"
                autoCapitalize="none"
                autoCorrect={false}
                value={password} onChangeText={setPassword}
                secureTextEntry
                />
             { errorMessage ? <Text style={errorMessage}>{ errorMessage }</Text> : null } 
            <Spacer>
            <Button title={submitButtonText} onPress={ () => onSubmit({ email, password})} />
            </Spacer>
        </>
    );
};

const style = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        margin: 10
    }
});

export default AuthForm;
