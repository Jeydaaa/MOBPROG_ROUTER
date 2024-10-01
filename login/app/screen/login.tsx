// /app/screen/login.tsx
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { LoginStyles } from "../styles/Loginstyles";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserContext } from "../context/Usercontext";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();
  const { setUser } = useUserContext(); // Get the setUser function from context

  const handleLogin = async () => {
    try {
      const storedEmail = (await AsyncStorage.getItem('userEmail')) || ''; // Use default empty string
      const storedPassword = (await AsyncStorage.getItem('userPassword')) || ''; // Use default empty string

      if (email === storedEmail && password === storedPassword) {
        const firstName = (await AsyncStorage.getItem('userFirstName')) || ''; // Use default empty string
        const lastName = (await AsyncStorage.getItem('userLastName')) || ''; // Use default empty string

        setUser({ firstName, lastName, email });
        Alert.alert('Success', 'Login successful!');
        router.push('/dashboard');
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Login failed. Please try again.');
    }
  };

  return (
    <View style={LoginStyles.container}>
      <Text style={LoginStyles.title}>Login</Text>
      {errorMessage ? <Text style={LoginStyles.errorText}>{errorMessage}</Text> : null}
      
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={LoginStyles.input}
        placeholderTextColor="#ecf0f1"
      />
      
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={LoginStyles.input}
        placeholderTextColor="#ecf0f1"
      />
      
      <TouchableOpacity style={LoginStyles.button} onPress={handleLogin}>
        <Text style={LoginStyles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Link href="screen/register" style={LoginStyles.linkText}>
        <Text>Don't have an account? Register</Text>
      </Link>
    </View>
  );
};

export default LoginPage;
