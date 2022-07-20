import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../components/Header';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
})

export default HomeScreen