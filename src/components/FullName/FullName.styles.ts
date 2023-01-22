import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const fullNameStyles = StyleSheet.create({
  input: {
    height: 40,
    width: 160,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 16,
    borderColor: colors.GRAY,
  },
});
