/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-08-01 23:02:49
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-02 23:37:13
 * @FilePath: \AwesomeProject\src\components\form\login.js
 * @Description: 表单
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Button,
} from 'react-native';

const formDefaultData = {
  userName: null,
  password: null,
};
export default function Form() {
  const [formData, setFormData] = useState(formDefaultData);

  const onBtn = () => {
    console.log('formData', formData);
  };
  return (
    <View style={styles.flex}>
      <TextInput
        placeholder="用户名"
        onChange={value => {
          console.log('表单', value);
        }}
        style={[styles.inputStyle, styles.borderStyle]}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="密码"
        style={[styles.inputStyle, styles.borderStyle]}
      />
      <View style={[styles.inputStyle, styles.borderStyle]}>
        <Button
          onPress={onBtn}
          title="登录"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  borderStyle: {
    borderColor: '#cacaca',
    borderWidth: 1,
  },
  inputStyle: {
    width: '80%',
    height: 35,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
