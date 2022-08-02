/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-07-26 19:54:23
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-02 23:04:20
 * @FilePath: \AwesomeProject\App.js
 * @Description:
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import React from 'react';
import Hello from './src/pages/hello';
import Form from './src/components/form/login';
import {View} from 'react-native';

const App = () => {
  return (
    <View>
      <Hello />
      <Form />
    </View>
  );
};

export default App;
