import * as React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import ChatListItem from "../components/ChatListItem/Index";
import NewMesageButton from "../components/NewMessageButton/Index";
import ChatRooms from "../data/ChatRooms";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={ChatRooms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
      />
      <NewMesageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
