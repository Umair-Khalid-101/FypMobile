import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import { SelectList } from "react-native-dropdown-select-list";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
export default function NewCampaignForm() {
  const [selected, setSelected] = React.useState("");

  const data = [
    { value: "Technology" },
    { value: "Medical" },
    { value: "Art" },
    { value: "Music" },
    { value: "Illustration" },
  ];
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };
  return (
    <View>
      <Text
        style={{
          color: "#242F9B",
          fontWeight: "bold",
        }}
      >
        Title
      </Text>
      <TextInput style={styles.input}></TextInput>
      <Text
        style={{
          color: "#242F9B",
          fontWeight: "bold",
        }}
      >
        End Date
      </Text>
      <TextInput style={styles.input2}></TextInput>
      <Text
        style={{
          color: "#242F9B",
          fontWeight: "bold",
        }}
      >
        Wallet Address
      </Text>
      <TextInput style={styles.input2}></TextInput>
      <Text
        style={{
          color: "#242F9B",
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        Category
      </Text>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        boxStyles={{
          borderRadius: 30,
          width: 300,
          marginTop: 10,
          borderColor: "#242F9B",
        }}
      />
      <TouchableOpacity style={styles.imagebutton} onPress={pickImage}>
        <Text style={{ color: "white" }}>Pick Image</Text>
      </TouchableOpacity>

      <Text
        style={{
          color: "#242F9B",
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        Amount
      </Text>
      <TextInput style={styles.input2}></TextInput>
      <Text
        style={{
          color: "#242F9B",
          fontWeight: "bold",
        }}
      >
        Description
      </Text>
      <TextInput style={styles.input3}></TextInput>

      <TouchableOpacity
        style={styles.success}
        onPress={() => navigation.navigate("CampaignSuccess")}
      >
        <Text
          style={{ color: "white", fontSize: 20 }}
          onPress={() => navigation.navigate("CampaignSuccess")}
        >
          Create Campaign
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#242F9B",
    height: 50,
    width: 300,
    borderRadius: 50,
    marginTop: 10,
  },
  input2: {
    borderWidth: 1,
    borderColor: "#242F9B",
    height: 50,
    width: 300,
    borderRadius: 50,
    marginTop: 10,
  },
  input3: {
    borderWidth: 1,
    borderColor: "#242F9B",
    height: 200,
    width: 300,
    borderRadius: 20,
    marginTop: 10,
    lineHeight: 23,
  },
  success: {
    backgroundColor: "#242F9B",
    height: 50,
    borderRadius: 50,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  imagebutton: {
    width: 300,
    height: 50,
    backgroundColor: "#242F9B",
    marginTop: 20,
    borderRadius: 50,

    justifyContent: "center",
    alignItems: "center",
  },
});
