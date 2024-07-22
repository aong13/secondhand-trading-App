import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            // checkLoginStatus();
            navigation.replace('MainTab');
        }, 2000);
    }, [navigation]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>오운완</Text>
        </View>
    );
};

export default Splash;