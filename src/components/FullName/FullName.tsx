import React from "react";
import { TextInput } from "react-native";

import { colors } from "../../constants/colors";
import { fullNameStyles } from "./FullName.styles";

interface fullNameProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  surname: string;
  setSurname: React.Dispatch<React.SetStateAction<string>>;
}
export const FullName: React.FC<fullNameProps> = ({
  name,
  setName,
  surname,
  setSurname,
}) => {
  return (
    <>
      <TextInput
        style={fullNameStyles.input}
        onChangeText={setName}
        value={name}
        placeholder="Type your name"
        placeholderTextColor={colors.GRAY}
      />
      <TextInput
        style={fullNameStyles.input}
        onChangeText={setSurname}
        value={surname}
        placeholder="Type your surname"
        placeholderTextColor={colors.GRAY}
      />
    </>
  );
};
