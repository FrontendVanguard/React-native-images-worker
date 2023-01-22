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
  errors: errorsType;
  setErrors: React.Dispatch<React.SetStateAction<errorsType>>;
}

export const PersonalId: React.FC<PersonalIdProps> = ({
  personalID,
  isPerson,
  setPersonalId,
  errors,
  setErrors,
}) => {
  const handleChangePersonalId = (e: string) => {
    setPersonalId(e.trim());

    if (isPerson ? !validatePesel(e) : !validateNip(e)) {
      setErrors((prev) => {
        return { ...prev, personalId: "Personal ID is incorrect" };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, personalId: "" };
      });
    }
  };

  return (
    <>
      <TextInput
        style={{
          ...personalIdStyles.input,
          borderColor: !!errors.personalId ? colors.RED : colors.GRAY,
        }}
        onChangeText={handleChangePersonalId}
        value={personalID}
        placeholder={`Type your ${isPerson ? "PESEL" : "NIP"}`}
        keyboardType="numeric"
        placeholderTextColor={colors.GRAY}
      />
      {!!errors.personalId && (
        <Text style={personalIdStyles.errorText}>{errors.personalId}</Text>
      )}
    </>
  );
};
