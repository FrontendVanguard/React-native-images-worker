import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors";

export const personalIdStyles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 16,
  },

  errorText: {
    marginTop: -8,
    color: colors.RED,
  },
});
