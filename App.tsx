import * as React from "react";
import { Alert, Pressable, Text, View } from "react-native";
import axios from "axios";

import { ImageSelect } from "./src/components/ImageSelect/ImageSelect";
import { PersonalId } from "./src/components/PersonalId/PersonalId";
import { FullName } from "./src/components/FullName/FullName";
import { UserType } from "./src/components/UserType/UserType";

import { appStyles } from "./App.styles";

export interface fileType {
  uri: string;
}

export interface errorsType {
  photo: string;
  personalId: string;
}

export const App: React.FC = (): JSX.Element => {
  const [name, setName] = React.useState<string>("");
  const [surname, setSurname] = React.useState<string>("");
  const [isPerson, setIsPerson] = React.useState<boolean>(true);
  const [image, setImage] = React.useState<fileType | null>(null);
  const [personalID, setPersonalId] = React.useState<string>("");

  const [errors, setErrors] = React.useState<errorsType>({
    photo: "",
    personalId: "",
  });

  const handleCancel = () => {
    setName("");
    setSurname("");
    setIsPerson(true);
    setImage(null);
    setPersonalId("");
    setErrors({
      photo: "",
      personalId: "",
    });
  };

  const handleSave = () => {
    if (name && surname && image?.uri && !errors.photo && !errors.personalId)
      axios
        .post("https://localhost:60001/Contractor/Save", {
          name: name,
          surname: surname,
          isPerson: isPerson,
          image: image,
          personalID: personalID,
        })
        .then((response) => {
          Alert.alert("Response", response.data);
        })
        .catch((error) => {
          Alert.alert("Error", "This endpoint not found");
        });
    else {
      Alert.alert("Warning", "Please complete form");
    }
  };

  return (
    <View style={appStyles.container}>
      <FullName
        name={name}
        setName={setName}
        surname={surname}
        setSurname={setSurname}
      />
      <UserType isPerson={isPerson} setIsPerson={setIsPerson} />
      <PersonalId
        personalID={personalID}
        setPersonalId={setPersonalId}
        isPerson={isPerson}
        errors={errors}
        setErrors={setErrors}
      />
      <ImageSelect
        image={image}
        setImage={setImage}
        errors={errors}
        setErrors={setErrors}
      />
      <View style={appStyles.buttonsContainer}>
        <Pressable style={appStyles.button} onPress={handleCancel}>
          <Text>Cancel</Text>
        </Pressable>
        <Pressable style={appStyles.button} onPress={handleSave}>
          <Text>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default App;
