import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    alignItems: "flex-end",
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    alignItems: "flex-end",
  },
  buttonContainer: {
    backgroundColor: Colors.light.tint,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: { flex: 1, marginHorizontal: 10 },
  icons: { marginHorizontal: 5 },
});

export default styles;
