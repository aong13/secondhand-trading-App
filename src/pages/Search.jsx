import React from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { BasicHeader } from '../components/BasicHeader';

const Search = () => {
  return (
    <SafeAreaView>
        <BasicHeader title={'검색'} />
        <View>
            <Text>Search</Text>
        </View>
    </SafeAreaView>
  )
}

export default Search