//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  TextInput,
  Search,
} from "react-native";
import Top from "../components/Topcontainer";

import { Ionicons } from "@expo/vector-icons";
import {
  MaterialCommunityIcons,
  FontAwesome,
  SimpleLineIcons,
  EvilIcons,
} from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

// create a component
const Heart = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <Top />

      {/* tob bar */}

      {/* center */}
      {/* <LinearGradient
        colors={["#fafafa", "#fafafa"]}
        style={{ flex: 1, backgroundColor: "#F2F2F2" }}
      > */}
      <View
        style={{
          width: 280,
          height: 35,
          borderWidth: 1,
          // paddingLeft: 20,
          // margin: 5,

          justifyContent: "space-evenly",
          flexDirection: "row",
          borderRadius: 20,
          // marginLeft: 200,
          borderColor: "#707070",
          backgroundColor: "#fffff",
          marginHorizontal: 55,
          marginVertical: 15,
        }}
      >
        <View style={{ justifyContent: "center" }}>
          <EvilIcons name="search" size={24} color="#707070" />
        </View>
        <TextInput
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search here"
          style={{ marginLeft: 10 }}
        />
        <View
          style={{
            marginLeft: 130,
            marginTop: 5,
          }}
        >
          <FontAwesome name="microphone" size={24} color="#707070" />
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          backgroundColor: "#F2F2F2",
          borderRadius: 10,
          height: "20%",
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.2,
          shadowRadius: 5.62,
          elevation: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              color: "#333",
              fontSize: 18,
              fontWeight: "500",
              marginTop: 10,
            }}
          >
            Painter
          </Text>
          <FontAwesome name="share-alt" size={34} color="#333" />
        </View>

        <Text
          style={{
            color: "#333",
            fontSize: 14,
            fontWeight: "400",
            marginTop: 10,

            marginHorizontal: 10,
          }}
        >
          Zeal Zoft Pvt Ltd
        </Text>

        <View
          style={{
            flexDirection: "row",
            width: "57%",
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              width: 150,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginBottom: 10,
                alignContent: "center",
              }}
            >
              <FontAwesome name="rupee" size={22} color="#333" />
              <Text
                style={{
                  // marginTop: 3,

                  marginLeft: 10,
                  fontSize: 13,
                  fontWeight: "400",
                }}
              >
                Rs.1000/day
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 10,
                width: 150,
                alignContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="timer-sand"
                size={24}
                color="#333"
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 13,
                  fontWeight: "400",
                }}
              >
                5 Days
              </Text>
            </View>
            {/* <View
              style={{
                flexDirection: "row",
                marginBottom: 10,
                width: 150,
                alignContent: "center",
              }}
            >
              <SimpleLineIcons name="graduation" size={24} color="#333" />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 13,
                  fontWeight: "400",
                }}
              >
                Non-Mandatory
              </Text>
            </View> */}
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              marginLeft: 3,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginBottom: 10,
                width: 180,
                alignContent: "center",
              }}
            >
              <Ionicons name="location-outline" size={24} color="#333" />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 13,
                  fontWeight: "400",
                }}
              >
                Adyar, Chennai
              </Text>
            </View>
            <View
              style={{
                alignContent: "center",

                flexDirection: "row",
                marginBottom: 10,
                width: 180,
              }}
            >
              <MaterialCommunityIcons
                name="map-marker-distance"
                size={22}
                color="#333"
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 13,
                  fontWeight: "400",
                }}
              >
                2.5 Km
              </Text>
            </View>
            {/* <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                width: 180,
                marginBottom: 10,
              }}
            >
              <MaterialCommunityIcons
                name="bag-personal-outline"
                size={20}
                color="#333"
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 13,
                  fontWeight: "400",
                }}
              >
                Fresher
              </Text>
            </View> */}
          </View>
        </View>
      </View>
      {/* <View
          style={{
            height: 80,
            width: 340,
            alignContent: "flex-start",
            justifyContent: "space-between",
            position: "absolute",
            marginHorizontal: 20,
            marginVertical: 20,
          }}
        >
          <Text
            style={{
              color: "#4A4242",
              fontSize: 22,

              fontWeight: "700",
              marginTop: 21,
            }}
          >
            You have received
          </Text>

          <Text
            style={{
              color: "#f6ab03",
              fontSize: 27,
              marginLeft: 190,
              fontWeight: "900",
              position: "absolute",
              marginTop: 4,
            }}
          >
            12 likes
            <MaterialCommunityIcons
              name="hand-heart"
              size={44}
              color="#FF5A5F"
            />
          </Text>
          <Text
            style={{
              color: "#4A4242",
              fontSize: 22,
              fontWeight: "700",
              alignContent: "space-around",
            }}
          >
            in last week
          </Text>
        </View>
        <View
          style={{
            width: 342,
            height: 170,
            backgroundColor: "#FFFFFF",
            marginTop: 150,
            justifyContent: "space-evenly",
            marginHorizontal: 24,
            borderLeftWidth: 10,
            borderColor: "#6BC3FF",
            borderRadius: 10,
            position: "relative",
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.2,
            shadowRadius: 5.62,
            elevation: 8,
          }}
        >
          <View style={{ marginLeft: 25 }}>
            <Text style={{ color: "#4A4242", fontSize: 15, fontWeight: "900" }}>
              Saravanan A S (4.9
              <MaterialIcons name="stars" size={17} color="#FF5AB2" />)
            </Text>
            <Text style={{ color: "#4A4242", fontSize: 17, fontWeight: "700" }}>
              <MaterialCommunityIcons
                name="star-check"
                size={28}
                color="#f6ab03"
              />
              Truster User
            </Text>
            <Text
              style={{
                color: "#4A4242",
                fontSize: 16,
                fontWeight: "700",
                fontStyle: "italic",
              }}
            >
              Technology enthusiast with 10 years of experience in the field of
              aerospaee
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 4,
              borderColor: "#F2F2F2",
              marginLeft: 25,
            }}
          >
            <Text style={{ fontSize: 18 }}>Active job openings</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",

                alignContent: "center",
                height: 40,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "#6BC3FF",
                  width: 130,
                  height: 23,
                  borderRadius: 15,
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Full stack developer
              </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "#6BC3FF",
                  borderRadius: 15,
                  width: 130,
                  height: 23,
                  textAlign: "center",
                }}
              >
                Lead UX designer
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 342,
            height: 170,
            backgroundColor: "#FFFFFF",
            marginTop: 12,
            marginHorizontal: 24,
            borderLeftWidth: 10,
            borderColor: "#6BC3FF",
            borderRadius: 10,
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.2,
            shadowRadius: 5.62,
            elevation: 8,
          }}
        >
          <View style={{ marginLeft: 25 }}>
            <Text style={{ color: "#4A4242", fontSize: 15, fontWeight: "900" }}>
              Saravanan A S (4.9
              <MaterialIcons name="stars" size={17} color="#FF5AB2" />)
            </Text>
            <Text style={{ color: "#4A4242", fontSize: 17, fontWeight: "700" }}>
              <MaterialCommunityIcons
                name="star-check"
                size={28}
                color="#f6ab03"
              />
              Truster User
            </Text>
            <Text
              style={{
                color: "#4A4242",
                fontSize: 16,
                fontWeight: "700",
                fontStyle: "italic",
              }}
            >
              Technology enthusiast with 10 years of experience in the field of
              aerospaee
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 4,
              borderColor: "#F2F2F2",
              marginLeft: 25,
            }}
          >
            <Text style={{ fontSize: 18 }}>Active job openings</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",

                alignContent: "center",
                height: 40,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "#6BC3FF",
                  width: 130,
                  height: 23,
                  borderRadius: 15,
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Plumber
              </Text>
            </View>
          </View>
        </View> */}
      {/* </LinearGradient> */}
    </View>
  );
};

// define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 0.1,
//     flexDirection: "row",
//     backgroundColor: "#F2F2F2",
//     justifyContent: "space-between",
//     alignItems: "flex-end",
//     shadowColor: "#000000",
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 5.62,
//     elevation: 8,
//   },
//   leftSide: {
//     flex: 0.5,
//   },
//   rightContainer: {
//     flex: 0.7,
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },
// });

//make this component available to the app
export default Heart;
