import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../../components/Header/Header';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.parentContainer}>
      <Header />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
});
