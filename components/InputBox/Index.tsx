import React, { useState } from "react";
import { View, TextInput } from "react-native";
import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import styles from "./style";

const InputBox = () => {
  const [message, setMessage] = useState("");

  const onsendPress = () => {
    console.warn("sending" + message);
    setMessage("");
    // Send message to backend
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
        <TextInput
          placeholder="Type a message"
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <Entypo name="attachment" size={24} color="grey" style={styles.icons} />
        {!message && (
          <Fontisto name="camera" size={24} color="grey" style={styles.icons} />
        )}
      </View>
      <View style={styles.buttonContainer}>
        {!message ? (
          <MaterialCommunityIcons name="microphone" size={24} color="white" />
        ) : (
          <MaterialIcons
            name="send"
            size={28}
            color="white"
            onPress={onsendPress}
          />
        )}
      </View>
    </View>
  );
};

export default InputBox;
