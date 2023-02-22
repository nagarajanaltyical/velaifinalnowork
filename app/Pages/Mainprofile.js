import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
export default function Profilepage({ navigation }) {
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
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 18, color: "#333" }}>+91 8220553838</Text>
          </View>
          <View>
            <Text style={{ fontSize: 18, color: "#333" }}>Adayar,chennai</Text>
          </View>
        </View>
      </View>
      <ScrollView style={{ marginHorizontal: 20 }}>
        <View
          style={{
            height: 130,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            borderColor: "#D9D9D9",
            borderBottomWidth: 1,
          }}
        >
          <View style={{ marginBottom: 10 }}>
            <Text>Need to Add Your Details</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Userprofile")}
              // style={{
              //   backgroundColor: "green",
              //   padding: 10,
              //   borderRadius: 10,
              // }}
            >
              <LinearGradient
                colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
                style={{
                  height: 49,
                  width: 290,
                  justifyContent: "center",
                  alignItems: "center",
                  // marginHorizontal: 50,
                  borderRadius: 10,
                  // opacity: mobilenumber.length > 1 && !istick ? 1 : 0.5,
                  // marginTop: 30,
                }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                useAngle={45}
              >
                <Text
                  style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}
                >
                  Add Personal Details
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: 80,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex-start",
            paddingLeft: 30,
            borderColor: "#D9D9D9",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => {
              navigation.navigate("personalprofile");
            }}
          >
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Feather name="edit" size={24} color="black" />
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
                Update Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 80,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex-start",
            paddingLeft: 30,
            borderColor: "#D9D9D9",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Privacypolicy");
            }}
          >
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <MaterialIcons name="security" size={24} color="black" />
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
                Privacy Policies
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 80,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex-start",
            paddingLeft: 30,
            borderColor: "#D9D9D9",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Termscondition");
            }}
          >
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Ionicons
                name="ios-information-circle-outline"
                size={24}
                color="black"
              />
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
                Terms and Conditions
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 80,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex-start",
            paddingLeft: 30,
            borderColor: "#D9D9D9",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <AntDesign name="customerservice" size={24} color="black" />

              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
                Help
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 80,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex-start",
            paddingLeft: 30,
            borderColor: "#D9D9D9",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Faq");
            }}
          >
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <SimpleLineIcons name="question" size={24} color="black" />
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
                FAQ
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 80,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex-start",
            paddingLeft: 30,
            borderColor: "#D9D9D9",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Octicons name="arrow-switch" size={24} color="black" />
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
                Switch Account
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 80,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex-start",
            paddingLeft: 30,
            borderColor: "#D9D9D9",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Ionicons name="person-add-outline" size={24} color="black" />
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
                Add Account
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 80,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex-start",
            paddingLeft: 30,
            borderColor: "#D9D9D9",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <SimpleLineIcons name="logout" size={24} color="black" />
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
                Log out
              </Text>
            </View>
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
    flexGrow: 0.6,
    height: "100%",
    justifyContent: "center",
    marginBottom: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
