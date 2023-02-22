import React from "react";
import { useState, useRef, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import {
  Text,
  View,
  Modal,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ToastAndroid,
  Pressable,
  Keyboard,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import * as DocumentPicker from "expo-document-picker";
import { Entypo } from "@expo/vector-icons";
import { Formik } from "formik";
import loginValidationSchema from "../components/formvalidation";
import { FontAwesome } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useContext } from "react";
import { useCallback } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PhoneInput from "react-native-phone-number-input";
import { parsePhoneNumber } from "react-native-phone-number-input";
import Top from "../components/Topcontainer";
// import { isValidPhoneNumber } from "react-phone-number-input";
import { LinearGradient } from "expo-linear-gradient";
import OtpScreen from "./Otpscreen";
import OTPInput from "../components/otp/otpInput";
import * as ImagePicker from "expo-image-picker";
import { AuthContext, LocalizationContext } from "../../App";
import { number } from "yup";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Button } from "react-native-paper";
export default function Userprofile({ navigation }) {
  const { t, language, setlanguage } = useContext(LocalizationContext);
  const [ActivityIndicators, setActivityIndicators] = useState(false);
  const { state, dispatch } = useContext(AuthContext);
  console.log(state);
  console.log(state.userdeatils);
  const handlecall = () => {
    // console.log("console.log");
    // alert("hiiii");
    dispatch({ type: "userdetails" });
    // setuserdetails("true");
    setTimeout(() => navigation.navigate("bottomhome"), 100);
  };

  const [image, setImage] = useState(null);
  //to get skills
  useEffect(() => {
    async function fetchdata() {
      try {
        await fetch("http://192.168.1.6:5000/skills/api", {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
          .then((response) => response.json())
          .then((result) => (console.log(result), setSkills(result)));
      } catch (error) {
        console.warn(error);
      }
    }
    fetchdata();
  }, []);
  //to get the files
  const [fileResponse, setfileResponse] = useState(null);
  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.getDocumentAsync({
        copyToCacheDirectory: true,
      });
      console.log(response);
      setfileResponse(response);
      console.log(response);
      // setActivityIndicators(true);
      console.log("result is " + response);
      // console.log(result);
      let localUri = response.uri;
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
          await fetch(`http://192.168.1.6:5000/api/job_post/aws_upload/25`, {
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
              // setjobpostpic(result["updated"]);
              // setActivityIndicators(false);
              // setModalVisible(false);
            });
        } catch (error) {
          console.log(error);
        }
      }
      submitdata();
    } catch (err) {
      console.warn(err);
    }
  }, []);
  //Date picker
  const [date, setDate] = useState(new Date());
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
    });
  };
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
  const showDatepicker = () => {
    showMode("date");
  };
  //select Gender
  const [genderValue, setGenderValue] = useState(null);
  const [genderOpen, setGenderOpen] = useState(false);
  const { handleSubmit, control } = useForm();
  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);
  const [gender, setGender] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Prefer Not to Say", value: "neutral" },
  ]);
  const [isvoice, setisvoice] = useState(true);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [skills, setSkills] = useState(null);
  const [jobseeker, setjobseeker] = useState(false);
  const [jobprovider, setjobprovider] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <StatusBar style="auto" />

      <View style={styles.title}>
        <Text style={styles.titlestyle}>Personal Information</Text>
      </View>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.iconstotal}>
          <View>
            <FontAwesome name="user-circle" size={100} color="#D9D9D9" />
            <MaterialCommunityIcons
              name="pencil-circle"
              size={34}
              color="#1E5966"
              style={{ position: "relative", bottom: 28, left: 65 }}
            />
          </View>
        </View>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{
            // email: "",
            // password: "",
            // phone_number: "",
            first_name: "",
            last_name: "",
            //location: "",
          }}
          onSubmit={(values) => handleSubmits(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isValid,
          }) => (
            <>
              <View style={{ marginTop: 0 }}>
                <View style={styles.inputform}>
                  <View style={styles.name}>
                    <View style={styles.fname}>
                      <TextInput
                        placeholder={t("firstname")}
                        name="firstname"
                        style={styles.input}
                        placeholderTextColor="#707070"
                        onChangeText={handleChange("first_name")}
                        onBlur={handleBlur("first_name")}
                        defaultValue=""
                        underlineColorAndroid={"transparent"}
                      />
                      {errors.first_name && touched.first_name && (
                        <Text
                          style={{
                            fontSize: 13,
                            color: "red",
                            marginHorizontal: 20,
                          }}
                        >
                          {errors.first_name}
                        </Text>
                      )}
                    </View>
                  </View>
                  <View style={styles.phone}>
                    <TextInput
                      placeholder={t("phoneplace")}
                      style={styles.input}
                      maxLength={10}
                      keyboardType="number-pad"
                      placeholderTextColor="#707070"
                      onChangeText={handleChange("phone_number")}
                      onBlur={handleBlur("phone_number")}
                      defaultValue=""
                    />
                    {errors.phone_number && touched.phone_number && (
                      <Text
                        style={{
                          fontSize: 13,
                          color: "red",
                          marginHorizontal: 20,
                        }}
                      >
                        {errors.phone_number}
                      </Text>
                    )}
                  </View>
                  <View style={styles.email}>
                    <TextInput
                      placeholder={t("emailplace")}
                      style={styles.input}
                      keyboardType="email-address"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      placeholderTextColor="#707070"
                      defaultValue=""
                    />
                    {errors.email && touched.email && (
                      <Text
                        style={{
                          fontSize: 13,
                          color: "red",
                          marginHorizontal: 20,
                        }}
                      >
                        {errors.email}
                      </Text>
                    )}
                  </View>
                  <View style={styles.email}>
                    <Controller
                      name="gender"
                      defaultValue=""
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <View style={styles.dropdownGender}>
                          <DropDownPicker
                            style={[
                              styles.dropdown,
                              {
                                width: "90%",
                                marginHorizontal: 20,
                                marginVertical: 6,
                                borderColor: "#707070",
                              },
                            ]}
                            open={genderOpen}
                            value={genderValue} //genderValue
                            items={gender}
                            setOpen={setGenderOpen}
                            setValue={setGenderValue}
                            setItems={setGender}
                            placeholder="Select Gender"
                            placeholderStyle={styles.placeholderStyles}
                            dropDownContainerStyle={{
                              width: "90%",
                              marginHorizontal: 20,
                            }}
                            listMode="SCROLLVIEW"
                            onOpen={onGenderOpen}
                            onChangeValue={onChange}
                            zIndex={3000}
                            zIndexInverse={1000}
                          />
                        </View>
                      )}
                    />
                  </View>
                  {
                    <View style={styles.password}>
                      <TextInput
                        placeholder={t("passpla")}
                        style={[styles.input, { position: "relative" }]}
                        underlineColorAndroid="transparent"
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        placeholderTextColor="#707070"
                        defaultValue={date.toDateString()}
                      />
                      <Pressable onPressOut={showDatepicker}>
                        <FontAwesome5
                          name="calendar-alt"
                          size={24}
                          color="#333"
                          style={{
                            position: "absolute",
                            right: 40,
                            bottom: 23,
                          }}
                        />
                      </Pressable>
                      {errors.password && touched.password && (
                        <Text
                          style={{
                            fontSize: 13,
                            color: "red",
                            marginHorizontal: 20,
                          }}
                        >
                          {errors.password}
                        </Text>
                      )}
                    </View>
                  }
                </View>
                <View style={styles.password}>
                  <TextInput
                    placeholder={t("passplac")}
                    style={[styles.input, { position: "relative" }]}
                    underlineColorAndroid="transparent"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
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
                    <Text style={{ textAlign: "center", color: "#333" }}>
                      Browse
                    </Text>
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
                                <AntDesign
                                  name="camera"
                                  size={24}
                                  color="white"
                                />
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
                                <FontAwesome
                                  name="files-o"
                                  size={24}
                                  color="white"
                                />
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
                  {errors.password && touched.password && (
                    <Text
                      style={{
                        fontSize: 13,
                        color: "red",
                        marginHorizontal: 20,
                      }}
                    >
                      {errors.password}
                    </Text>
                  )}
                </View>
                <View style={styles.skill}>
                  {skills === null ? (
                    <View>
                      <Text style={{ color: "#707070", marginHorizontal: 30 }}>
                        Loading...
                      </Text>
                    </View>
                  ) : (
                    <DropDownPicker
                      placeholder={t("skillpla")}
                      open={open}
                      value={value}
                      items={skills}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setSkills}
                      multiple={true}
                      searchable={true}
                      dropDownDirection="AUTO"
                      mode="BADGE"
                      listMode="MODAL"
                      style={{
                        borderWidth: 0.3,
                        borderColor: "black",
                        marginHorizontal: 20,
                        width: 355,
                      }}
                      modalAnimationType="slide"
                      placeholderStyle={{
                        fontWeight: "bold",
                      }}
                      badgeColors={"black"}
                      badgeTextStyle={{
                        fontStyle: "italic",
                        color: "white",
                      }}
                      badgeDotColors={["#00B4D8"]}
                    />
                  )}
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("eduexp")}>
                  <View style={[styles.education, { paddingRight: 10 }]}>
                    <View style={styles.educationIcon}>
                      <AntDesign name="pluscircleo" size={24} color="#1E5966" />
                    </View>
                    <View>
                      <Text style={styles.edutext}>Add Education</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("workexp")}
                >
                  <View style={styles.education}>
                    <View style={styles.educationIcon}>
                      <AntDesign name="pluscircleo" size={24} color="#1E5966" />
                    </View>
                    <View>
                      <Text style={styles.edutext}>Add Experience</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 20 }}>
                  {fileResponse === null ? "loading" : fileResponse.name}
                </Text>
                <TouchableOpacity onPress={handleDocumentSelection}>
                  <View style={[styles.education, { paddingRight: 15 }]}>
                    <View style={styles.educationIcon}>
                      <AntDesign name="pluscircleo" size={24} color="#1E5966" />
                    </View>
                    <View>
                      <Text style={styles.edutext}>Add Resume</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlecall()}>
                  <Text>enter details</Text>
                </TouchableOpacity>
                <LinearGradient
                  colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
                  style={{
                    backgroundColor: isValid ? "#6BC3FF" : "#87CEEB",
                    fontWeight: "600",

                    padding: 10,
                    width: "50%",
                    alignSelf: "center",
                    borderRadius: 10,
                    marginVertical: 20,
                  }}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  useAngle={45}
                >
                  <TouchableOpacity
                    // style={{
                    //   padding: 10,
                    //   width: "50%",
                    //   alignSelf: "center",
                    //   borderRadius: 10,
                    //   marginVertical: 20,
                    // }}
                    onPress={handleSubmit}
                    disabled={!isValid}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontWeight: "600",
                        color: isValid ? "black" : "white",
                      }}
                    >
                      Create
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
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
