import React from "react";
import { Image, Pressable, Text } from "react-native";
import { launchImageLibrary, OptionsCommon } from "react-native-image-picker";

import { fileType } from "../../../App";
import { selectImageStyles } from "./ImageSelect.styles";

interface ImageSelectProps {
  image: fileType | null;
  setImage: React.Dispatch<React.SetStateAction<fileType | null>>;
}

export const ImageSelect: React.FC<ImageSelectProps> = ({
  image,
  setImage,
}) => {
  const [error, setError] = React.useState<string>("");

  const handleSelectImage = () => {
    const options: OptionsCommon = {
      mediaType: "photo",
      includeBase64: true,
    };

    launchImageLibrary(options, (response) => {
      let file = response.assets![0];
      if (!response) {
        setError("Error while selecting image");
      } else if (file.height === 0 || file.width === 0) {
        setError("This file is not image type");
      } else {
        const source = {
          uri: "data:image/jpeg;base64," + file.base64,
        };
        setImage(source);
      }
    });
  };

  return (
    <>
      <Pressable style={selectImageStyles.button} onPress={handleSelectImage}>
        <Text>Select Image</Text>
      </Pressable>

      <Image
        source={image || require("../../images/defaultAvatar.png")}
        style={selectImageStyles.image}
      />
      {!!error && <Text style={selectImageStyles.errorText}>{error}</Text>}
    </>
  );
};
