import * as React from "react";
import { RadioButton } from "react-native-paper";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { colors } from "./constants/colors";
import { validatePesel } from "./utils/functions";

interface personalId {
  value: string;
  error: boolean;
}

export const App = () => {
  const [name, setName] = React.useState<string>("");
  const [surname, setSurname] = React.useState<string>("");
  const [isPerson, setIsPerson] = React.useState<boolean>(true);

  const [personalID, setPersonalId] = React.useState<personalId>({
    value: "",
    error: false,
  });

  const handleChangePersonalId = (e: string) => {
    setPersonalId((prev) => {
      return { ...prev, value: e };
    });

    if (validatePesel(personalID.value))
      setPersonalId((prev) => {
        return { ...prev, error: true };
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Type your name"
        placeholderTextColor={colors.GRAY}
      />
      <TextInput
        style={styles.input}
        onChangeText={setSurname}
        value={surname}
        placeholder="Type your surname"
        placeholderTextColor={colors.GRAY}
      />
      <View>
        <View style={styles.radioContainer}>
          <Text>Person</Text>
          <RadioButton
            value="Person"
            status={isPerson ? "checked" : "unchecked"}
            onPress={setIsPerson.bind(this, true)}
          />
        </View>
        <View style={styles.radioContainer}>
          <Text>Company</Text>
          <RadioButton
            value="Company"
            status={!isPerson ? "checked" : "unchecked"}
            onPress={setIsPerson.bind(this, false)}
          />
        </View>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={handleChangePersonalId}
        value={personalID.value}
        placeholder="Type your NIP or PESEL"
        keyboardType="numeric"
        placeholderTextColor={colors.GRAY}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.SOFT_WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default App;
