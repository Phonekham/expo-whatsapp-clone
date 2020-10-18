import React from "react";
import { View, FlatList } from "react-native";

import ContactListItem from "../components/ContactListItem/Index";
import users from "../data/Users";

const ContactsScreen = () => {
  return (
    <View>
      <FlatList
        style={{ width: "100%" }}
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ContactListItem user={item} />}
      />
    </View>
  );
};

export default ContactsScreen;
