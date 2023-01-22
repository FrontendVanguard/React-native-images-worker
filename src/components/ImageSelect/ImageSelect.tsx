import React from "react";
import { Alert, Image, Pressable, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { errorsType, fileType } from "../../../App";
import { selectImageStyles } from "./ImageSelect.styles";

interface ImageSelectProps {
  image: fileType | null;
  setImage: React.Dispatch<React.SetStateAction<fileType | null>>;
  errors: errorsType;
  setErrors: React.Dispatch<React.SetStateAction<errorsType>>;
}

export const ImageSelect: React.FC<ImageSelectProps> = ({
  image,
  setImage,
  errors,
  setErrors,
}) => {
  // const handleSelectImage = () => {
  //   const options: OptionsCommon = {
  //     mediaType: "photo",
  //     includeBase64: true,
  //   };

  //   launchImageLibrary(options, (response: ImagePickerResponse) => {
  //     if (response.assets === undefined) return;
  //     let file = response.assets[0];
  //     if (!response) {
  //       setErrors((prev) => ({
  //         ...prev,
  //         photo: "Error while selecting image",
  //       }));

  //       return;
  //     }

  //     if (file.height === 0 || file.width === 0) {
  //       setErrors((prev) => ({
  //         ...prev,
  //         photo: "This file is not an image type",
  //       }));
  //     } else {
  //       setImage({
  //         uri: "data:image/jpeg;base64," + file.base64,
  //       });
  //     }
  //   }).catch((error) => {
  //     Alert.alert(error.message, "Promise error");
  //   });
  // };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage({
        uri: result.assets[0].uri,
      });
      setErrors((prev) => ({ ...prev, photo: "" }));
    } else {
      setErrors((prev) => ({ ...prev, photo: "Please select image" }));
      Alert.alert("Error", "Some error, please try again");
    }
  };

  return (
    <>
      <Pressable style={selectImageStyles.button} onPress={pickImageAsync}>
        <Text>Select Image</Text>
      </Pressable>

      <Image
        source={image || require("../../../assets/defaultAvatar.png")}
        style={selectImageStyles.image}
      />
      {!!errors.photo && (
        <Text style={selectImageStyles.errorText}>{errors.photo}</Text>
      )}
    </>
  );
};
