import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>This is Jakarta Bold font</Text>
      <Text style={styles.regularText}>This is Jakarta Regular font</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // You can adjust the background color here
  },
  boldText: {
    fontFamily: 'Jakarta-Bold', // Apply custom font here
    fontSize: 24,
  },
  regularText: {
    fontFamily: 'Jakarta-Regular', // Apply custom font here
    fontSize: 18,
  },
});
