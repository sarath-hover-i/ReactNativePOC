import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';

const centerImg = require('../../../../assets/image/centerImg.jpg');

const OtpPage = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.parentView}>
      <View style={styles.topSec}>
        <View style={styles.textContainer}>
          <Text style={styles.helloTextStyle}>Hello Again!</Text>
          <Text style={styles.subTextStyle}>Ipsem Lorem</Text>
        </View>
      </View>

      <View style={styles.imgContainer}>
        <Image style={styles.mainImg} source={centerImg} />
      </View>

      <View style={styles.bottomSec}>
        <View>
          <Text style={styles.welcomeTextStyle}>Welcome Back!</Text>
        </View>

        <TextInput
          style={styles.userInput}
          onChangeText={onChangeText}
          value={text}
          placeholder="Email Address/Phone Number"
          placeholderTextColor={'#d3d3d3'}
        />

        <View style={styles.btnView}>
          <Pressable
            style={styles.sendBtn}
            onPress={() => Alert.alert('Send OTP button Clicked')}>
            <Text style={styles.sendBtnTextStyle}>Send OTP</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpPage;

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    position: 'relative',
  },

  topSec: {
    height: '50%',
    backgroundColor: '#7bb9ff',
  },

  textContainer: {
    display: 'flex',
    gap: 4,
    marginVertical: 70,
  },

  helloTextStyle: {
    fontSize: 26,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },

  subTextStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',
  },

  imgContainer: {
    // flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    top: '22%',
  },

  mainImg: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },

  bottomSec: {
    width: '100%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    paddingHorizontal: 50,
  },

  welcomeTextStyle: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
  },

  userInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#cecece',
    borderRadius: 50,
    padding: 10,
  },

  btnView: {
    width: '100%',
    display: 'flex',
    alignContent: 'center',
  },

  sendBtn: {
    padding: 15,
    backgroundColor: '#0b7eff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sendBtnTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    marginTop: 3,
  },
});
