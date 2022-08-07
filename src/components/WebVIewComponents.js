/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-08-07 19:45:59
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-07 19:51:30
 * @FilePath: \AwesomeProject\src\components\WebVIewComponents.js
 * @Description: WebView 组件
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import React from 'react';
import {WebView} from 'react-native-webview';
import {View, Dimensions} from 'react-native';

export default function WebVIewComponents() {
  const {width, height} = Dimensions.get('screen');
  return (
    <View
      style={{
        width: width,
        height: height,
        borderColor: 'red',
        borderWidth: 1,
        marginTop: 30,
      }}>
      <WebView source={{uri: 'https://www.baidu.com'}} />
    </View>
  );
}
