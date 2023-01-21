import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const selectImageStyles = StyleSheet.create({
  button: {
    padding: 10,
    border: `1px solid ${colors.GRAY}`,
    borderRadius: 10,
    width: 185,
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    alignSelf: "center",
    width: 100,
    height: 100,
    border: `1px solid ${colors.GRAY}`,
  },
  errorText: {
    alignSelf: "center",
    marginTop: -8,
    color: "red",
  },
});
