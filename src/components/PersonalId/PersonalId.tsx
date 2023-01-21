import React from "react";
import { Text, TextInput } from "react-native";

import { errorsType } from "../../../App";
import { colors } from "../../constants/colors";
import { validateNip, validatePesel } from "../../utils/functions";
import { personalIdStyles } from "./PersonalId.styles";

interface PersonalIdProps {
  personalID: string;
  setPersonalId: React.Dispatch<React.SetStateAction<string>>;
  isPerson: boolean;
}

export const PersonalId: React.FC<PersonalIdProps> = ({
  personalID,
  isPerson,
  setPersonalId,
}): JSX.Element => {
  const [error, setError] = React.useState<string>("");

  const handleChangePersonalId = (e: string) => {
    setPersonalId(e.trim());

    if (isPerson ? !validatePesel(e) : !validateNip(e)) {
      setError(`${isPerson ? "PESEL" : "NIP"} is incorrect`);
    } else {
      setError("");
    }
  };

  return (
    <>
      <TextInput
        style={{
          ...personalIdStyles.input,
          borderColor: !!error ? "red" : "gray",
        }}
        onChangeText={handleChangePersonalId}
        value={personalID}
        placeholder={`Type your ${isPerson ? "PESEL" : "NIP"}`}
        keyboardType="numeric"
        placeholderTextColor={colors.GRAY}
      />
      {!!error && <Text style={personalIdStyles.errorText}>{error}</Text>}
    </>
  );
};
