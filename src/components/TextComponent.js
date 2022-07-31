/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-07-31 20:38:51
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-07-31 20:55:13
 * @FilePath: \AwesomeProject\src\components\TextComponent.js
 * @Description: 文本组件
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import React from 'react';
import {Text, StyleSheet} from 'react-native';
export default function TextComponent() {
  return <Text style={styles.text}>文本组件</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});
