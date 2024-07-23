import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList } from 'react-native';
import { WebView } from 'react-native-webview';
import BasicHeader from '../components/BasicHeader';

const Home = () => {
  const sourceUri = 'http://localhost:8080/KakaoMap.html'; // 로컬 웹 서버 URL
  const htmlUri = Platform.OS === 'android' 
  ? 'file:///android_asset/KakaoMap.html' 
  : 'KakaoMap.html';

  const example = [
    { id: '1', title: 'Card 1' },
    { id: '2', title: 'Card 2' },
    { id: '3', title: 'Card 3' },
    { id: '4', title: 'Card 4' },
    { id: '5', title: 'Card 5' },
  ];

  const Card = ({ title }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );

  const Carousel = ({ data }) => {
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => <Card title={item.title} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <BasicHeader title={'동 검색'} />
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
        <Carousel data={example} />
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
  list: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200, // Card width
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
