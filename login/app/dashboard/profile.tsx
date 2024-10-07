import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useUserContext } from "../context/Usercontext";

const ProfileScreen = () => {
  const { user, updateUser } = useUserContext(); 
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [email, setEmail] = useState(user.email || "");

  useEffect(() => {
    console.log("User data has been updated:", { firstName, lastName, email });

    return () => {
      console.log("Cleaning up user data listener");
    };
  }, [firstName, lastName, email]);

  const handleSave = () => {
    updateUser({ firstName, lastName, email });
    
    Alert.alert("Success", "User data saved successfully!", [{ text: "OK" }]);
    console.log("User data saved:", { firstName, lastName, email });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  inputContainer: {
    width: '80%', 
    marginBottom: 15, 
  },
  label: {
    fontSize: 16,
    marginBottom: 5, 
    fontWeight: "bold",
    alignSelf: "flex-start", 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});

export default ProfileScreen;
