import { StyleSheet, Text, View,TextInput, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const Login = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState("")


    return (
        <View style={{  backgroundColor: "yellow", marginHorizontal: 20}}>
            <View style={{ marginTop: 200, backgroundColor: "green", alignItems: 'center'}}>
                <Text style={{ fontSize: 48, fontWeight: 900 }}>Login</Text>
            </View>

            <View>

                <TextInput
                    style={{
                        borderWidth: 2,
                        borderColor: "blue",
                        borderRadius: 6,
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        marginTop: 50,
                        marginHorizontal: 20
                    }}
                    placeholder='Email or Username'
                    value={username}
                    onChange={OnChageUsername}
                />

                <TextInput
                    style={{
                        borderWidth: 2,
                        borderColor: "blue",
                        borderRadius: 6,
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        marginTop: 20,
                        marginHorizontal: 20


                    }}
                    placeholder='Email or Username'
                />
            </View>

            <View>
                <TouchableOpacity style={{
                    backgroundColor: "black", borderRadius: 6, 
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    marginTop: 50,
                    marginHorizontal: 20,
                    alignItems: 'center' }}>
                    <Text style ={{color: "white"}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})