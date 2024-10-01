import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useUserContext } from "../context/Usercontext";
const ProfileScreen = () => {
  const { user } = useUserContext(); 
  return (
    <View style={styles.container}>
      {user.firstName ? (
        <>
          <Text style={styles.text}>Fullname: {user.firstName} {user.lastName}!</Text>
          <Text style={styles.text}>Email: {user.email}</Text>
        </>
      ) : (
        <Text style={styles.text}>No user data found.</Text>
      )}
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
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
