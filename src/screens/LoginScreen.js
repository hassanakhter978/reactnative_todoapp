import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    
    if (email.trim() === '') {
      alert('Please enter your email.');
      return;
    }

    if (password.trim()=== '') {
      alert('Please enter your password.');
      return;
    }

    navigation.navigate("Home")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
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
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <TouchableOpacity style={{ backgroundColor: "black", borderRadius: 6, paddingVertical: 6, marginVertical: 24, alignItems: 'center' }} onPress={handleLogin} >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, paddingHorizontal: 20 }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={{
          marginTop: 20,
          color: 'blue',
        }}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '60%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 5,
    shadowOpacity: 0.7,
    shadowColor: "wheat"
  },

});

export default LoginScreen;
