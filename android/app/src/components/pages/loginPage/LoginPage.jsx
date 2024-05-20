import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LoginPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.textt}>
          hjvghjvgjhvgjjhvgjhvgjkgjkjhfvjvfjuyvfjvfjhv
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: 'red',
    padding: '5px',
  },
  textt: {
    flex: 1,
    color: '#000000',
  },
});
