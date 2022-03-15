/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
  Platform,
} from "react-native";

import {
  Scene,
  Router,
  Actions,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from "react-native-router-flux";
import Message from "./components/MessageBar";

const styles = StyleSheet.create({
  scene: {
    backgroundColor: '#F5FCFF',
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});
const prefix = Platform.OS === "android" ? "mychat://mychat/" : "mychat://";

const App = () => (
  <Router sceneStyle={styles.scene} uriPrefix={prefix}>
    <Overlay key="overlay">
      <Modal key="modal" hideNavBar>
        <Lightbox key="lightbox">
          <Stack key="root" titleStyle={{alignSelf: "center"}} hideNavBar />
        </Lightbox>
      </Modal>

      {/* 全局消息推送 */}
      <Scene component={Message} />
    </Overlay>
  </Router>
);

export default App;
