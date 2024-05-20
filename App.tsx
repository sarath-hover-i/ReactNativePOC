/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import OtpPage from './android/app/src/components/pages/otpPage/OtpPage';

// for navigation

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar />
        <View style={{flex: 1}}>
          <OtpPage />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
