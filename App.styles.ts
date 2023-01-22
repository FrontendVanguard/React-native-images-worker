import { StyleSheet } from "react-native";

import { colors } from "./src/constants/colors";

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 64,
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  button: {
    padding: 15,
    borderWidth: 1,
    borderColor: colors.GRAY,
    borderRadius: 10,

    textAlign: "center",
    marginBottom: 10,
    marginRight: 12,
  },
});
