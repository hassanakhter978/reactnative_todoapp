import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';



const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        if (email.trim() === '') {
            alert('Please enter your email.');
            return;
        }

        if (password.trim() === '') {
            alert('Please enter your password.');
            return;
        }
        navigation.navigate('Login');
    };

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
        }}>
            <Text style={{
                fontSize: 28,
                fontWeight: 'bold',
                marginBottom: 30,
            }}>Sign up</Text>

            <TextInput
                style={{
                    height: 40,
                    width: '60%',
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginBottom: 16,
                    padding: 8,
                    borderRadius: 5,
                    shadowOpacity: 0.7,
                    shadowColor: "wheat"
                }}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={{
                    height: 40,
                    width: '60%',
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginBottom: 16,
                    padding: 8,
                    borderRadius: 5,
                    shadowOpacity: 0.7,
                    shadowColor: "wheat"
                }}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={{ backgroundColor: "black", borderRadius: 6, paddingVertical: 6, marginVertical: 24, alignItems: 'center' }} onPress={handleSignup} >
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, paddingHorizontal: 20 }}>Signup</Text>
            </TouchableOpacity>

            <Text style={{
                marginTop: 20,
                color: 'blue',
            }} onPress={() => navigation.navigate('Login')}>
                Already have an account? Login here
            </Text>
        </View>
    );
};


export default SignupScreen;