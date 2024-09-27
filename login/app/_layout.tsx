import { Stack } from "expo-router"

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="register" options={{ title: 'Register' }} />
            <Stack.Screen name="dashboard/_layout" options={{ headerShown: false }} />

        </Stack>
    );
};

export default RootLayout;