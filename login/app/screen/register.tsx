import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { RegisterStyles } from "../styles/Registerstyles";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();

  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      await AsyncStorage.setItem('userFirstName', firstName);
      await AsyncStorage.setItem('userLastName', lastName);
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userPassword', password);

      Alert.alert('Success', 'Successfully registered!');

      router.push('/');
    } catch (error) {
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <View style={RegisterStyles.container}>
      <Text style={RegisterStyles.title}>Register</Text>
      {errorMessage ? <Text style={RegisterStyles.errorText}>{errorMessage}</Text> : null}

      <View style={RegisterStyles.nameContainer}>
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          style={RegisterStyles.halfInput}
          placeholderTextColor="#ecf0f1"
        />

        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          style={[RegisterStyles.halfInput, RegisterStyles.lastNameInput]}
          placeholderTextColor="#ecf0f1"
        />
      </View>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={RegisterStyles.input}
        placeholderTextColor="#ecf0f1"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={RegisterStyles.input}
        placeholderTextColor="#ecf0f1"
      />

      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={RegisterStyles.input}
        placeholderTextColor="#ecf0f1"
      />

      <TouchableOpacity style={RegisterStyles.button} onPress={handleRegister}>
        <Text style={RegisterStyles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Link href="/" style={RegisterStyles.linkText}>
        <Text>Already have an account? Login</Text>
      </Link>
    </View>
  );
};

export default RegisterPage;