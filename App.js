import React from "react";
import { Platform, ScrollView } from 'react-native';
import { Box, Text, NativeBaseProvider } from "native-base";
import { StatusBar } from 'expo-status-bar';
import { theme } from "./assets/styles/theme";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {

    useFonts({
        'MontRegular': require('./assets/fonts/Raleway-Regular.ttf'),
    });

    return (
        <SafeAreaProvider>
            <ScrollView contentContainerStyle={{flexGrow: 1}}
                        keyboardShouldPersistTaps='handled'
                        alwaysBounceVertical={false}>
                <NativeBaseProvider theme={theme}>
                    <Box flex={1} pt={Platform.OS === 'android' || Platform.OS === 'ios' ? '40px' : '12px'} px="16px">
                        <Text bold fontSize="18px" color="primary.500">
                            Open up App.js to start working on your app!
                            Whereas recognition of the inherent dignity
                        </Text>
                        <Text fontSize="12px" color="black" fontWeight={600}>
                            Open up App.js to start working on your app!
                            Whereas recognition of the inherent dignity
                        </Text>
                        <StatusBar style="auto" />
                    </Box>
                </NativeBaseProvider>
            </ScrollView>
        </SafeAreaProvider>
    );
}
