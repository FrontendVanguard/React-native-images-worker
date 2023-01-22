import React from "react";
import { Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

import { userTypeStyles } from "./UserType.styles";

interface UserTypeProps {
  isPerson: boolean;
  setIsPerson: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserType: React.FC<UserTypeProps> = ({
  isPerson,
  setIsPerson,
}) => {
  return (
    <View>
      <View style={userTypeStyles.radioContainer}>
        <Text>Person</Text>
        <RadioButton
          value="Person"
          status={isPerson ? "checked" : "unchecked"}
          onPress={setIsPerson.bind(this, true)}
        />
      </View>
      <View style={userTypeStyles.radioContainer}>
        <Text>Company</Text>
        <RadioButton
          value="Company"
          status={!isPerson ? "checked" : "unchecked"}
          onPress={setIsPerson.bind(this, false)}
        />
      </View>
    </View>
  );
};
