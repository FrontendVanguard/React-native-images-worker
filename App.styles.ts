import { StyleSheet } from "react-native";

import { colors } from "./src/constants/colors";

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.SOFT_WHITE,
    alignSelf: "center",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 16,
    gap: 8,
  },

  buttonsContainer: {
    flexDirection: "row",
    gap: 8,
  },

  button: {
    padding: 5,
    border: `1px solid ${colors.GRAY}`,
    borderRadius: 10,
    width: 85,
    textAlign: "center",
    marginBottom: 10,
  },
});
