import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import BasicHeader from '../components/BasicHeader';
import TransactionCards from '../components/TransactionCards';

const Home = () => {
  const sourceUri = 'http://localhost:8080/KakaoMap.html'; // 로컬 웹 서버 URL
  const htmlUri = Platform.OS === 'android' 
  ? 'file:///android_asset/KakaoMap.html' 
  : 'KakaoMap.html';

  const dummyData = [
    { id: '1', title: '닌텐도 스위치 팝니다.', content: '상태 A급 풀박스입니다.', method: '직거래', price: 30000 },
    { id: '2', title: '플레이스테이션 4 팝니다.', content: '약간의 사용감 있지만 잘 작동합니다.', method: '직거래', price: 20000 },
    { id: '3', title: 'XBOX ONE S 팝니다.', content: '거의 사용 안한 새 제품입니다.', method: '직거래 및 택배 가능', price: 25000 },
    { id: '4', title: '닌텐도 스위치 라이트 판매합니다.', content: '상태 매우 좋습니다. 추가 컨트롤러 포함.', method: '직거래', price: 22000 },
    { id: '5', title: '닌텐도 스위치 게임 팝니다.', content: '마리오 카트 8 디럭스, 젤다의 전설 포함.', method: '택배만 가능', price: 15000 },
    { id: '6', title: '플레이스테이션 5 팝니다.', content: '새 제품, 박스 미개봉입니다.', method: '직거래', price: 50000 }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <BasicHeader title={'거래 찾기'} showBackButton={false}/>
        <WebView
          originWhitelist={['*']}
          source={{ uri: sourceUri }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowFileAccess={true}
          allowUniversalAccessFromFileURLs={true}
          style={styles.webview}
          onError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.warn('WebView error: ', nativeEvent);
          }}
          onHttpError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.warn('WebView HTTP error: ', nativeEvent);
          }}
          onLoad={() => console.log('WebView loaded!!!')}
          onLoadEnd={() => console.log('WebView load end')}
          onLoadStart={() => console.log('WebView load start')}
        />
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
  webview: {
    flex: 1,
    borderColor: 'black',
    borderWidth:4
  },
  cardContainer: {
    position: 'absolute',
    bottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9,
  },

});

export default Home;
