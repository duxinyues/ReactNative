/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-08-01 23:02:49
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-01 23:10:16
 * @FilePath: \AwesomeProject\src\components\form\index.js
 * @Description: 表单
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';

export default function Form() {
  return (
    <View style={styles.flex}>
      <TextInput placeholder="userName" />
      <Text>提交</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  inputStyle: {
    height: 45,
    borderWidth: 1,
    borderColor: 'red',
  },
});
