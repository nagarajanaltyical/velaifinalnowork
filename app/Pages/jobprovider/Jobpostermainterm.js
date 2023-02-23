//import liraries
import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

// create a component
export default function Jobpostermain({ navigation }) {
  return (
    <>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600",
          }}
        >
          Create Post
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginBottom: 20,
          // alignItems: "center",
          // alignContent: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Long")}>
          <LinearGradient
            colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
            style={{
              height: 42,
              width: 160,
              borderRadius: 10,
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            useAngle={45}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "600",
                marginHorizontal: 10,
                justifyContent: "center",
              }}
            >
              Longtime Job
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("short")}>
          <LinearGradient
            colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
            style={{
              height: 42,
              width: 160,
              borderRadius: 10,
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            useAngle={45}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "600",
                marginHorizontal: 10,
                justifyContent: "center",
              }}
            >
              Shorttime Job
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1, height: "100%" }}>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
            }}
          >
            Your Post
          </Text>
        </View>
        {/* <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            marginVertical: 30,
          }}
        > */}
        {/* <ScrollView style={{ height: "100%" }}> */}
        {/* <Image
            style={{
              height: "50%",
              width: "100%",

              resizeMode: "contain",
            }}
            source={require("../../images/jobpost.png")}
          />
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              Don’t have an any post
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              create your post
            </Text>
          </View>
        </View> */}
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 82,
              backgroundColor: "#FFFFFF",
              justifyContent: "space-evenly",
              // borderLeftWidth: 10,
              width: "90%",
              marginBottom: 15,

              borderColor: "#D9D9D9",
              borderRadius: 20,
              borderWidth: 2,
            }}
          >
            <View style={{ marginLeft: 30 }}>
              <Text
                style={{
                  color: "#333",
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                Software developer
              </Text>
              <Text
                style={{
                  color: "#333",
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                Posted on: Jan 2, 2023
              </Text>
              <Text
                style={{
                  color: "#333",
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                Expiry:Jan 12, 2023
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 82,
              backgroundColor: "#FFFFFF",
              justifyContent: "space-evenly",
              // borderLeftWidth: 10,
              width: "90%",
              marginBottom: 15,
              borderColor: "#D9D9D9",
              borderRadius: 20,
              borderWidth: 2,
            }}
          >
            <View style={{ marginLeft: 30 }}>
              <Text
                style={{
                  color: "#333",
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                Software developer
              </Text>
              <Text
                style={{
                  color: "#333",
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                Posted on: Jan 2, 2023
              </Text>
              <Text
                style={{
                  color: "#333",
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                Expiry:Jan 12, 2023
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 82,
              backgroundColor: "#FFFFFF",
              justifyContent: "space-evenly",
              // borderLeftWidth: 10,
              marginBottom: 15,

              width: "90%",
              borderColor: "#D9D9D9",
              borderRadius: 20,
              borderWidth: 2,
            }}
          >
            <View style={{ marginLeft: 30 }}>
              <Text
                style={{
                  color: "#333",
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                Software developer
              </Text>
              <Text
                style={{
                  color: "#333",
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                Posted on: Jan 2, 2023
              </Text>
              <Text
                style={{
                  color: "#333",
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                Expiry:Jan 12, 2023
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
