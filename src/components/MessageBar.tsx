import React, {useEffect} from "react";

const {MessageBar, MessageBarManager} = require("react-native-message-bar");
const Message = () => {
  useEffect(() => {
    MessageBarManager.registerMessage();
    return () => {
      MessageBarManager.unregisterMessage();
    };
  }, []);

  return <MessageBar ref="alert" />;
};

export default Message;
