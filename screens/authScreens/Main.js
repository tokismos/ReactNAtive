import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Alert, Switch, ActivityIndicator } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import * as authActions from '../../store/actions/auth'
import * as firebase from 'firebase';

const Main = (props) => {
    const [email, setEmail] = useState('hello@gmail.com');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingSIGNUP, setIsLoadingSIGNUP] = useState(false);
    const [password, setPassword] = useState('qwertyu');
    const dispatch = useDispatch();
    //let isAutoLoginEnabled = useSelector(state => state.auth.isAutoLoginEnabled);

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(state => !state);
    }

    useEffect(() => {
        dispatch(authActions.isAutoLoginEnabled(isEnabled));
    }, [isEnabled])


    const signUp = (email, password) => {
        setIsLoadingSIGNUP(true);

        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {

                console.log('User account created');
                setIsLoadingSIGNUP(false);
            })
            .catch(err => {
                Alert.alert('Error', err.message, [{ text: 'Okkay' }])
                setIsLoadingSIGNUP(false);

            });

    }
    const login = (email, password) => {
        setIsLoading(true);
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((data) => {
                dispatch(authActions.login(data.user.uid))

            }).catch((err) => {
                setIsLoading(false)
                Alert.alert('Error', err.message, [{ text: 'Okkay' }])
            }
            )


    };
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput style={styles.textInput} value={email} onChangeText={(text) => setEmail(text)} />
                <TextInput style={styles.textInput} secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
                {isLoadingSIGNUP ? <ActivityIndicator size='large' /> :<Button title='SignUp' onPress={() => signUp(email, password)} />}
            </View>
            <View style={styles.container}>
                <TextInput style={styles.textInput} value={email} />
                <TextInput style={styles.textInput} secureTextEntry value={password} />
                <View style={styles.switchContainer}>
                    <Text>Stay connected ?</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                {isLoading ? <ActivityIndicator size='large' /> : <Button title='Login' onPress={() => login(email, password)} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: 250,
        margin: 10,
        padding: 10,
        borderWidth: 1
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'


    }
});
export default Main