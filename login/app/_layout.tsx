// /app/_layout.tsx
import React from 'react';
import { Stack } from 'expo-router';
import { UserProvider } from './context/Usercontext';


const RootLayout = () => {
    return (
        <UserProvider>
            <Stack>
                <Stack.Screen 
                    name="index" 
                    options={{ title: 'LoginPage' }} 
                />
                <Stack.Screen 
                    name="register" 
                    options={{ title: 'Register' }} 
                />
                <Stack.Screen 
                    name="dashboard" 
                    options={{ title: 'Dashboard' }} 
                /> 
            </Stack>
        </UserProvider>
    );
};

export default RootLayout;
