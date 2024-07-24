import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import {HomeHeader} from '../components/BasicHeader';
import TransactionCards from '../components/TransactionCards';
import { NaverMapView } from '@mj-studio/react-native-naver-map';

import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

  const dummyData = [
    { id: '1', title: '닌텐도 스위치 팝니다.', content: '상태 A급 풀박스입니다.', method: '직거래', price: 30000 },
    { id: '2', title: '플레이스테이션 4 팝니다.', content: '약간의 사용감 있지만 잘 작동합니다.', method: '직거래', price: 20000 },
    { id: '3', title: 'XBOX ONE S 팝니다.', content: '거의 사용 안한 새 제품입니다.', method: '직거래 및 택배 가능', price: 25000 },
    { id: '4', title: '닌텐도 스위치 라이트 판매합니다.', content: '상태 매우 좋습니다. 추가 컨트롤러 포함.', method: '직거래', price: 22000 },
    { id: '5', title: '닌텐도 스위치 게임 팝니다.', content: '마리오 카트 8 디럭스, 젤다의 전설 포함.', method: '택배만 가능', price: 15000 },
    { id: '6', title: '플레이스테이션 5 팝니다.', content: '새 제품, 박스 미개봉입니다.', method: '직거래', price: 50000 }
  ];

const Home = ({navigation}) => {
  const currentLocation = useSelector((state) => state.location.currentLocation);
  const [camera, setCamera] = useState({ //서울
    latitude: 37.715133,
    longitude: 37.413294,
    zoom: 15,
  });

  //동주소까지 선택한경우 데이터를 받아옴.
  const route = useRoute();
  const { dong, coor } = route.params || {};
  

  useEffect(() => {
    if (coor) {
      setCamera({
        latitude: coor[0][1],
        longitude: coor[0][0],
        zoom: 15,
    })} 
    else if (currentLocation) {
      setCamera({
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        zoom: 15,
      });
    }
    else{
      //위치 재설정 필요
    }
    console.log("coor:", coor[0])
    console.log("setCamera:", camera)
  }, [currentLocation, coor]);

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader title={dong||"내 위치"} navigation={navigation}/>
    <NaverMapView
      style={styles.mapView}
      camera={camera}
    >
    </NaverMapView>
      <View style={styles.cardContainer}>
        <TransactionCards transactionList={dummyData} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mapView: {
    flex: 1,
  },
  cardContainer: {
    position: 'absolute',
    bottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9,
  },
});

export default Home;
