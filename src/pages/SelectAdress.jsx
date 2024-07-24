import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {BasicHeader} from '../components/BasicHeader';
import { siObj, siGuList } from '../data/Si-Gun-goo';
import dong_json from '../data/Mapped-dong.json';

const SelectAdress = ({ navigation }) => {
    const { top, bottom } = useSafeAreaInsets();
    const [selectSi, setSelectSi] = useState('');
    const [selectGu, setSelectGu] = useState('');
    const [selectDong, setSelectDong] = useState('');
    const [doList, setDoList] = useState([]);
    const [selectDongList, setSelectDongList] = useState([]);
    const [coorList, setCoor] = useState([]);
    // 시 선택 시
    const handleTouchSi = (e) => {
        setSelectSi(e);
        const selectedSi = e.long;
        const selectedGu = siGuList.find(item => item.si === selectedSi);
        setDoList(selectedGu ? selectedGu.gu : []);
        setSelectGu('');
        setSelectDongList([]);
    };

    // 구 선택 시
    const handleTouchGu = (e) => {
        setSelectGu(e);
        const dongList = Object.keys(dong_json).filter(dong => dong.includes(e));
        setSelectDongList(dongList);
    };

    // 동 선택 시
    const handleTouchDong = (e) => {
        const coor = dong_json[e] || []; // 선택한 동의 좌표
        const dong = e.split(' ')[2]; // 동 이름
        navigation.navigate('Home', { dong: dong, coor: coor }); // Home으로 데이터 전달
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF', paddingTop: top }}>
            <BasicHeader title={'동네별 검색'} />
            <View style={{ flexDirection: 'row', flex: 1 }}>
                <View style={{ flex: 0.2, backgroundColor: '#F5F5F5' }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {siObj.map((e, i) => (
                            <Pressable 
                                key={i} 
                                style={e.short === selectSi.short ? styles.onSelectSi : styles.offSelectSi} 
                                onPress={() => handleTouchSi(e)}
                            >
                                <Text allowFontScaling={false} style={e.short === selectSi.short ? styles.onSelectSiText : styles.offSelectSiText}>
                                    {e.short}
                                </Text>
                            </Pressable>
                        ))}
                        <View style={{ height: bottom }} />
                    </ScrollView>
                </View>
                <View style={{ flex: 0.4, borderRightWidth: 0.5, borderColor: '#C3C3C3' }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {doList.map((e, i) => (
                            <Pressable 
                                style={styles.DoWrapper} 
                                key={i} 
                                onPress={() => handleTouchGu(e)}
                            >
                                <Text allowFontScaling={false} style={e === selectGu ? styles.onSelectDo : styles.offSelectDo}>
                                    {e}
                                </Text>
                            </Pressable>
                        ))}
                        <View style={{ height: bottom }} />
                    </ScrollView>
                </View>
                <View style={{ flex: 0.4, borderRightWidth: 0.5, borderColor: '#C3C3C3' }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {selectDongList.map((e, i) => (
                            <Pressable 
                                onPress={() => handleTouchDong(e)} 
                                style={styles.DoWrapper} 
                                key={i}
                            >
                                <Text allowFontScaling={false} style={e === selectDong ? styles.onSelectDo : styles.offSelectDo}>
                                    {e.split(' ')[2]}
                                </Text>
                            </Pressable>
                        ))}
                        <View style={{ height: bottom }} />
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    onSelectSi: {
        backgroundColor: '#4AABFF',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#C3C3C3',
    },
    offSelectSi: {
        backgroundColor: '#F5F5F5',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#C3C3C3',
    },
    onSelectSiText: {
        fontSize: 16,
        lineHeight: 20,
        color: '#FFF',
        textAlign: 'center',
        fontWeight:'900'
    },
    offSelectSiText: {
        fontSize: 16,
        lineHeight: 20,
        color: '#888',
        textAlign: 'center',
    },
    DoWrapper: {
        paddingVertical: 16,
        paddingHorizontal: 0,
        borderBottomWidth: 0.5,
        borderBottomColor: '#C3C3C3',
        marginHorizontal: 16,
    },
    onSelectDo: {
        fontSize: 16,
        lineHeight: 20,
        color: '#4AABFF',
        textAlign: 'center',
        fontWeight:'900'
    },
    offSelectDo: {
        fontSize: 16,
        lineHeight: 20,
        color: '#888',
        textAlign: 'center',
    },
});

export default SelectAdress;
