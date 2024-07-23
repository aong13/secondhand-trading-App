import React from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const TransactionCards = ({ transactionList }) => {
  const Card = ({ data }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{data.title}</Text>
      <Text style={styles.cardContent}>{data.content}</Text>
      <View style={styles.methodTag}>
        <Text style={styles.cardMethod}>{data.method}</Text>
      </View>
      <Text>{`${data.price}원`}</Text>
    </View>
  );

  return (
    <FlatList
      data={transactionList}
      renderItem={({ item }) => <Card data={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderColor: '#4AABFF',
    borderWidth: 1,
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    width: width - 60, // Card width
    gap:3
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContent: {
    fontSize: 16,
    color: '#333',
  },
  methodTag: {
    backgroundColor: '#4AABFF',
    padding: 5,
    borderRadius: 5,
    width:'auto'
  },
  cardMethod: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  },
});
export default TransactionCards;