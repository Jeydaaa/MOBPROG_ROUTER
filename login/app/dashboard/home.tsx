import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useUserContext } from "../context/Usercontext";


export default function HomeScreen() {
  const { user } = useUserContext(); 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {user.firstName ? `Hi ! Welcome, ${user.firstName}!` : "Welcome to the Home Screen!"}
      </Text>
    </View>
  );
}

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
