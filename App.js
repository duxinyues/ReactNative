/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-07-26 19:54:23
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-07-28 23:38:46
 * @FilePath: \AwesomeProject\App.js
 * @Description:
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.flexBox}>
      <Text style={styles.text}>测试组件</Text>
      <Text>98789</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flexBox: {
    flex: 3,
  },
  text: {
    color: 'red',
    fontSize: 30,
  },
});

export default App;
