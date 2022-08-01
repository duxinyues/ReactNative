/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-07-30 13:57:19
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-01 21:53:32
 * @FilePath: \AwesomeProject\src\pages\hello.js
 * @Description: 开始页面
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const Hello = () => {
  const onPressIn = () => {
    console.log('按住');
  };
  const onPressOut = () => {
    console.log('松开');
  };
  const onLongPress = () => {
    console.log('长按');
  };
  const onPress = () => {
    console.log('触摸');
    alert('消息弹窗');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.flexBox}>
        <TouchableHighlight
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onLongPress={onLongPress}
          onPress={onPress}>
          <Image
            source={{
              uri: 'https://profile-avatar.csdnimg.cn/67927e8210de430e86d119a130c1dca2_xuelian3015.jpg!1',
            }}
            style={styles.image}
          />
        </TouchableHighlight>
      </View>
      {/* <TextInput style={styles.input} defaultValue="这是一个输入框" />
      <TouchableHighlight
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onLongPress={onLongPress}
        onPress={onPress}>
        <View>
          <Text style={styles.button}>按钮</Text>
        </View>
      </TouchableHighlight> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  flexBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    width: 300,
    height: 35,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 100,
    borderColor: 'blue',
    borderWidth: 1,
    textAlign: 'center',
  },
});
export default Hello;
