import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import DropDownRole from "./dropdown/dropdownRole";
import * as Location from "expo-location";
import DropDownLanguage from "./dropdown/DropDownLanguage";
import DropDownLanguage2 from "./dropdown/DropDownlanguage2";
import { useNavigation } from "@react-navigation/native";

import { FontAwesome5 } from "@expo/vector-icons";
export default function Top() {
  //To pass the location
  const [location, setLocation] = useState(null);
  const [loading, setiloading] = useState(true);
  const navigation = useNavigation();
  const [isvoice, setisvoice] = useState(true);

  //to get the permission we use UseEffect Hook
  useEffect(() => {
    //getting a user Location takes time so i need to wait so i make a async function
    const getPermission = async () => {
      //we use foreround permission for gettin Permission inside the app
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please give permissions to acces the Loaction");
        return;
      }
      //To get the current Location
      let CurrentLocation = await Location.getCurrentPositionAsync({});
      const reverseGeocodeAddress = await Location.reverseGeocodeAsync({
        longitude: CurrentLocation.coords.longitude,
        latitude: CurrentLocation.coords.latitude,
      });
      setLocation(reverseGeocodeAddress);
      if (location) {
        setiloading(false);
      }
    };

    getPermission();
  }, [location]);
  return (
    <View style={styles.topContainer}>
      {/* <View
        style={{
          height: 60,
          width: "100%",
          position: "relative",
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "flex-start",
          // alignItems: "center",
          // justifyContent: "center",
          // alignContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>
            <AntDesign name="left" size={24} color="#333" />
          </Text>
          <Text
            style={{
              marginRight: 40,
              marginLeft: 5,
              width: 190,
              alignItems: "center",
              fontSize: 16,
              fontWeight: "400",
            }}
          >
            Adyar, Chennai
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
          }}
        >
          <Ionicons name="md-globe-outline" size={24} color="#333" />
          <Pressable>
            <Text style={{ marginLeft: 3, Text: 18, color: "#333" }}>EN</Text>
          </Pressable>
          <Pressable onPress={() => setisvoice(!isvoice)}>
            {isvoice ? (
              <MaterialCommunityIcons
                name="account-voice"
                size={24}
                color="#333"
              />
            ) : (
              <MaterialCommunityIcons
                name="account-voice-off"
                size={24}
                color="black"
              />
            )}
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("role1");
            }}
          >
            <Ionicons name="person-circle-sharp" size={25} color="black" />
          </Pressable>
        </View>
      </View> */}
      <View style={styles.leftSide}>
        <View style={{ marginLeft: 5 }}>
          <Text>
            <FontAwesome name="location-arrow" size={24} color="#333" />
          </Text>
        </View>
        <View>
          {loading ? (
            <Text style={{ fontSize: 10, fontWeight: "700", color: "red" }}>
              loading..
            </Text>
          ) : (
            <Text
              style={{
                fontSize: 10,
                fontWeight: "700",
                color: "black",
                width: 100,
              }}
            >
              {location[0].district},{location[0].city},{location[0].region}
            </Text>
          )}
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "40%",
        }}
      >
        {/* <View>
          <Pressable>
            <MaterialCommunityIcons
              name="account-voice"
              size={24}
              color="black"
            />
          </Pressable>
        </View> */}
        {/* <View style={{ justifyContent: "space-evenly" }}> */}
        {/* <DropDownLanguage2 /> */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="md-globe-outline" size={24} color="#333" />
          <Pressable>
            <Text style={{ Text: 18, color: "#333" }}>EN</Text>
          </Pressable>
        </View>
        <Pressable onPress={() => setisvoice(!isvoice)}>
          {isvoice ? (
            <MaterialCommunityIcons
              name="account-voice"
              size={24}
              color="#333"
            />
          ) : (
            <MaterialCommunityIcons
              name="account-voice-off"
              size={24}
              color="black"
            />
          )}
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("mainprofile");
          }}
        >
          <Ionicons name="person-circle-sharp" size={35} color="black" />
        </Pressable>
      </View>
      {/* <View style={{ marginTop: -12 }}> */}
      {/* <DropDownRole /> */}
      {/* <Pressable onPress={() => navigation.navigate("register")}>
            <Image
              style={{ height: 40, width: 20 }}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
          </Pressable> */}
      {/* </View> */}
    </View>
    // </View>
  );
}
const styles = StyleSheet.create({
  topContainer: {
    // flexDirection: "row",
    // backgroundColor: "#fafafa",
    // flex: 0.1,
    // justifyContent: "space-between",
    // alignItems: "center",
    // padding: 5,
    height: 60,
    width: "100%",
    position: "relative",
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftSide: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});
