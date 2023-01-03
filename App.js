import React from "react";
import { StyleSheet, ScrollView } from 'react-native';
import { Box, Text, NativeBaseProvider } from "native-base";
import { StatusBar } from 'expo-status-bar';
import { theme } from "./assets/styles/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaProvider>
            <ScrollView contentContainerStyle={{flexGrow: 1}}
                        keyboardShouldPersistTaps='handled'
                        alwaysBounceVertical={false}>
                <NativeBaseProvider theme={theme}>
                    <Box style={styles.container}>
                        <Text fontSize="18px" color="primary.500">
                            Open up App.js to start working on your app!
                        </Text>
                        <StatusBar style="auto"/>
                    </Box>
                </NativeBaseProvider>
            </ScrollView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
