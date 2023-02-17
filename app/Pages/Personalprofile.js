import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { LocalizationContext } from "../../App";
import * as ImagePicker from "expo-image-picker";
export default function PersonProfilepage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [ActivityIndicators, setActivityIndicators] = useState(false);
  const { t, language, setlanguage } = useContext(LocalizationContext);
  const [image, setImage] = useState(null);
  async function takeAndUploadPhotoAsync(paras) {
    // Display the camera to the user and wait for them to take a photo or to cancel
    // the action
    let result =
      paras === "files"
        ? await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          })
        : await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
    result;
    // ImagePicker saves the taken photo to disk and returns a local URI to it
    console.log(result);
    setActivityIndicators(true);
    console.log("result is " + result);
    console.log(result);
    let localUri = result.assets[0]["uri"];
    console.log(localUri);
    setImage(localUri);
    let filename = localUri.split("/").pop();
    console.log(filename);
    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    console.log(type);
    var formdata = new FormData();
    formdata.append("file", { uri: localUri, name: filename, type });
    // Upload the image using the fetch and FormData APIs
    let FFormData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    FFormData.append("photo", { uri: localUri, name: filename, type });
    async function submitdata() {
      try {
        console.log("im inside");
        await fetch(`http://192.168.1.7:5000/api/job_post/aws_upload/5`, {
          method: "POST",
          mode: "cors", // no-cors, *cors, same-origin
          // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: "same-origin", // include, *same-origin, omit
          headers: {
            // Accept: "application/json",
            "Content-Type": "multipart/form-data",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formdata, // body data type must match "Content-Type" header
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setjobpostpic(result["updated"]);
            setActivityIndicators(false);
            setModalVisible(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
    submitdata();
  }
  return (
    <View style={styles.container}>
      <View style={styles.iconstotal}>
        <View
          style={{
            flexGrow: 0.3,
            alignItems: "center",
          }}
        >
          <FontAwesome name="user-circle" size={80} color="#D9D9D9" />
          <MaterialCommunityIcons
            name="pencil-circle"
            size={33}
            color="#1E5966"
            style={{ position: "relative", bottom: 28, left: 30 }}
          />
        </View>
        <View style={styles.top2}>
          <View style={{ marginVertical: 5, flexDirection: "row" }}>
            <Text style={{ fontSize: 18, color: "#333" }}>+91 8220553838</Text>
            <TouchableOpacity
              style={{ backgroundColor: "green", borderRadius: 25 }}
            >
              <Text>Profile:100%</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize: 18, color: "#333" }}>Adayar,chennai</Text>
          </View>
        </View>
      </View>
      <ScrollView style={{ marginBottom: 50 }}>
        <View
          style={{
            height: 130,
            alignContent: "center",
            borderColor: "#D9D9D9",
            borderWidth: 1,
            borderBottomWidth: 0,
            borderBottomColor: "white",
          }}
        >
          <View style={{ marginBottom: 5, paddingLeft: 20 }}>
            <Text>Personal Information</Text>
          </View>
          <View>
            <Text style={{ paddingLeft: 20 }}>Mobile No</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 25,
              }}
            >
              <View>
                <Text>+91 8220553838</Text>
              </View>
              <View>
                <Feather name="edit" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              paddingLeft: 20,
              borderColor: "#D9D9D9",
              borderWidth: 1,
              borderBottomWidth: 0,
            }}
          >
            Mail id
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 25,
            }}
          >
            <View>
              <Text>akashpoovan983@gmail.com</Text>
            </View>
            <View>
              <Feather name="edit" size={24} color="black" />
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              paddingLeft: 20,
              borderColor: "#D9D9D9",
              borderWidth: 1,
              borderBottomWidth: 0,
            }}
          >
            Gender
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 25,
            }}
          >
            <View>
              <Text>Male</Text>
            </View>
            <View>
              <Feather name="edit" size={24} color="black" />
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              paddingLeft: 20,
              borderColor: "#D9D9D9",
              borderWidth: 1,
              borderBottomWidth: 0,
            }}
          >
            DOB
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 25,
            }}
          >
            <View>
              <Text>24/03/2000</Text>
            </View>
            <View>
              <Feather name="edit" size={24} color="black" />
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingBottom: 10,
              borderColor: "#D9D9D9",
              borderBottomWidth: 0,
              borderWidth: 1,
            }}
          >
            <View>
              <Text
                style={{
                  paddingLeft: 2,
                  borderColor: "#D9D9D9",
                }}
              >
                Education Details
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: 50 }}>
                <AntDesign name="plus" size={24} color="black" />
              </View>
              <View>
                <Feather name="edit" size={24} color="black" />
              </View>
            </View>
          </View>
          <View style={{ paddingLeft: 25, paddingBottom: 10 }}>
            <View>
              <Text>B.Tech(IT)</Text>
            </View>
            <View>
              <Text>Anna University,chennai</Text>
            </View>
            <View>
              <Text>2017-2021</Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingBottom: 10,
              borderColor: "#D9D9D9",
              borderBottomWidth: 0,
              borderWidth: 1,
            }}
          >
            <View>
              <Text
                style={{
                  paddingLeft: 2,
                  borderColor: "#D9D9D9",
                }}
              >
                Experience Details
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: 50 }}>
                <AntDesign name="plus" size={24} color="black" />
              </View>
              <View>
                <Feather name="edit" size={24} color="black" />
              </View>
            </View>
          </View>
          <View style={{ paddingLeft: 25, paddingBottom: 10 }}>
            <View>
              <Text>Process Asssociate - 7months</Text>
            </View>
            <View>
              <Text>Zeal Zoft private limited</Text>
            </View>
            <View>
              <Text>2017-2021</Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              paddingLeft: 20,
              borderColor: "#D9D9D9",
              borderWidth: 1,
              borderBottomWidth: 0,
            }}
          >
            Uploaded Proof
          </Text>
          <View style={styles.password}>
            <TextInput
              placeholder="Adhar.pdf"
              style={[styles.input, { position: "relative" }]}
              underlineColorAndroid="transparent"
              //   onChangeText={handleChange("password")}
              //   onBlur={handleBlur("password")}
              placeholderTextColor="#707070"
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#D9D9D9",
                padding: 10,
                width: "30%",
                borderRadius: 10,
                position: "absolute",
                right: 30,
                top: 15,
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={{ textAlign: "center", color: "#333" }}>Browse</Text>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              //animationInTiming = {13900}
              transparent={true}
              visible={modalVisible}
              animationOut="slide"
              swipeDirection="down"
              onRequestClose={() => {
                setModalVisible(!modalVisible);
                setActivityIndicators(false);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  {ActivityIndicators ? (
                    <View>
                      <Text>Loading. please wait</Text>
                      <ActivityIndicator size="large" />
                    </View>
                  ) : (
                    <>
                      <TouchableHighlight
                        style={{
                          ...styles.openButton,
                          width: 150,
                          backgroundColor: "#2196F3",
                        }}
                        onPress={() => {
                          takeAndUploadPhotoAsync("camera");
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <AntDesign name="camera" size={24} color="white" />
                          <Text style={styles.textStyle}>{t("pic")}</Text>
                        </View>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{
                          ...styles.openButton,
                          width: 150,
                          backgroundColor: "#2196F3",
                          marginTop: 20,
                        }}
                        onPress={() => takeAndUploadPhotoAsync("files")}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <FontAwesome name="files-o" size={24} color="white" />
                          <Text style={styles.textStyle}>{t("fi")}</Text>
                        </View>
                      </TouchableHighlight>
                    </>
                  )}
                </View>
              </View>
            </Modal>
            {image === null ? (
              <Text></Text>
            ) : (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  source={{ uri: image }}
                  style={{ width: 50, height: 50 }}
                />
              </View>
            )}
          </View>
        </View>
        <View>
          <TouchableOpacity style={{ backgroundColor: "red" }}>
            <Text>Update</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  top2: {
    flexGrow: 0.5,
    height: "100%",
    justifyContent: "center",
    marginBottom: 20,
  },
  container: {
    flex: 1,
  },
  edutext: {
    fontSize: 17,
    fontWeight: "400",
    paddingLeft: 5,
    color: "#1E5966",
    paddingTop: 8,
  },
  titlestyle: {
    fontWeight: "500",
    fontSize: 22,
  },
  iconstotal: {
    alignItems: "center",
    alignContent: "center",
    paddingTop: 20,
    justifyContent: "space-around",
    height: 200,
    flexDirection: "row",
  },
  education: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "center",
    alignItems: "flex-end",
    marginVertical: 10,
  },
  centeredView: {
    flex: 1,
    width: "90%",
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 25,
    borderColor: "#707070",
    padding: 100,
    height: "42%",
    alignItems: "center",
    shadowColor: "#000",
    borderWidth: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 10,
  },
  input: {
    borderRadius: 10,
    height: 50,
    backgroundColor: "#fff",
    borderColor: "#707070",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    width: "90%",
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "center",
  },
  inputs: {
    height: 40,
    margin: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
