import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const back_icon = require('../assets/icons/back.png');
const arrow_down = require('../assets/icons/arrow_drop_down.png');

export const BasicHeader = ({ title, showBackButton = true, rightButtons = [] }) => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.headerWrapper}>
            {showBackButton && (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={back_icon} style={styles.headerIcon} />
                </TouchableOpacity>
            )}
            <Text style={styles.headerTitle}>{title}</Text>
            <View style={styles.headerButtonsWrapper}>
                {rightButtons.map((button, index) => (
                    <TouchableOpacity key={index} onPress={button.onPress||""}> 
                        <Image source={button.icon} style={styles.headerIcon} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export const HomeHeader = ({ title }) => {
    const navigation = useNavigation();
    
    const onPressArrow = () =>{
    navigation.navigate('SelectAdress')
    }
    return (
        <View style={styles.headerWrapper}>
            <View style={styles.homeHeaderTitleWrapper}>
                <Text style={styles.homeHeaderTitle}>{title}</Text>
                <TouchableOpacity onPress={onPressArrow}>
                    <Image source={arrow_down} style={styles.headerIcon} />
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: '#FFF',
        paddingHorizontal: 16,
        paddingVertical: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EAEAEA',
        height:28+16+16,
    },
    homeHeaderTitleWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    homeHeaderTitle:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    headerTitle: {
        position:'absolute',
        left: '48%',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    headerButtonsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    headerIcon:{
        width: 28,
        height: 28
    },
});
