import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const selectImageStyles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.GRAY,
    borderRadius: 10,

    marginBottom: 10,
  },

  image: {
    alignSelf: "flex-start",
    width: 150,
    height: 150,
    border: `1px solid ${colors.GRAY}`,
    marginBottom: 16,
  },
  errorText: {
    marginTop: -8,
    marginBottom: 12,
    color: colors.RED,
  },
});
