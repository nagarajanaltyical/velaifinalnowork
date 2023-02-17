//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";
import MessageSelect from "../message/MessageSelect";

// create a component

function Jobposterapplied() {
  const [isclick, setIsclick] = useState(false);
  const [search, setSearch] = useState("");

  console.log(isclick);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* tob bar */}
      <View style={{ flex: 1 }}>
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
              You have
            </Text>

            <Text
              style={{
                color: "#f6ab03",
                fontSize: 27,
                width: 400,
                marginLeft: 90,
                fontWeight: "900",
                position: "absolute",
              }}
            >
              <Text style={{ fontSize: 30 }}> 12</Text> unread chats
              <MaterialIcons name="message" size={44} color="#FF5A5F" />
            </Text>
          </View> */}
        <View
          style={{
            //   justifyContent: "center",
            //   alignContent: "center",
            marginVertical: 10,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 20 }}>
            Interested Candidates
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
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
              marginHorizontal: 17,
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
              justifyContent: "space-between",
              width: "18%",
              flexDirection: "row",
            }}
          >
            <FontAwesome name="filter" size={32} color="black" />
            <Ionicons name="heart" size={32} color="black" />
          </View>
        </View>
        <ScrollView>
          <View style={{ marginHorizontal: 10 }}>
            <View
              style={{
                width: "100%",
                height: 82,
                backgroundColor: "#FFFFFF",
                justifyContent: "space-evenly",
                borderBottomWidth: 1,
                // borderLeftWidth: 10,
                borderColor: "#333",
                borderRadius: 10,
                position: "relative",
              }}
            >
              <View style={{ marginLeft: 5 }}>
                <View
                  style={{
                    width: 50,
                    marginTop: 5,
                    position: "absolute",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?auto=compress&cs=tinysrgb&w=600",
                    }}
                    style={{
                      backgroundColor: "purple",
                      width: 46,
                      height: 46,
                      //   marginTop: 3,
                      borderRadius: 110,
                      resizeMode: "cover",
                      // borderColor: "#f6ab03",
                      // borderWidth: 1,
                    }}
                  />
                </View>
                <View style={{ width: 130, marginLeft: 55 }}>
                  <Text
                    style={{
                      color: "#333",
                      fontSize: 15,
                      fontWeight: "600",
                    }}
                  >
                    Andreya
                  </Text>
                </View>
                <View style={{ position: "absolute", marginLeft: 300 }}>
                  <Ionicons name="heart" size={24} color="black" />
                  <Text
                    style={{
                      // backgroundColor: "#FF5AB2",
                      // width: 20,
                      // borderRadius: 60,
                      // color: "white",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    1hr ago
                  </Text>
                </View>

                <Text
                  style={{
                    color: "#707070",
                    fontSize: 14,
                    fontWeight: "500",
                    marginLeft: 55,
                  }}
                >
                  Applied for
                  <Text
                    style={{
                      color: "#333",
                      fontSize: 16,
                      fontWeight: "500",
                      marginRight: 30,
                    }}
                  >
                    Java Developer
                  </Text>
                </Text>
              </View>
            </View>
            {/* 2 */}
            <View
              style={{
                width: "100%",
                height: 82,
                backgroundColor: "#FFFFFF",
                justifyContent: "space-evenly",
                borderBottomWidth: 1,
                // borderLeftWidth: 10,
                borderColor: "#333",
                borderRadius: 10,
                position: "relative",
              }}
            >
              <View style={{ marginLeft: 5 }}>
                <View
                  style={{
                    width: 50,
                    marginTop: 5,
                    position: "absolute",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?auto=compress&cs=tinysrgb&w=600",
                    }}
                    style={{
                      backgroundColor: "purple",
                      width: 46,
                      height: 46,
                      //   marginTop: 3,
                      borderRadius: 110,
                      resizeMode: "cover",
                      // borderColor: "#f6ab03",
                      // borderWidth: 1,
                    }}
                  />
                </View>
                <View style={{ width: 130, marginLeft: 55 }}>
                  <Text
                    style={{
                      color: "#333",
                      fontSize: 15,
                      fontWeight: "600",
                    }}
                  >
                    Sundar Pichai
                  </Text>
                </View>
                <View style={{ position: "absolute", marginLeft: 300 }}>
                  <Ionicons name="heart" size={24} color="black" />
                  <Text
                    style={{
                      // backgroundColor: "#FF5AB2",
                      // width: 20,
                      // borderRadius: 60,
                      // color: "white",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    1hr ago
                  </Text>
                </View>

                <Text
                  style={{
                    color: "#707070",
                    fontSize: 14,
                    fontWeight: "500",
                    marginLeft: 55,
                  }}
                >
                  Applied for
                  <Text
                    style={{
                      color: "#333",
                      fontSize: 16,
                      fontWeight: "500",
                      marginRight: 30,
                    }}
                  >
                    Java Developer
                  </Text>
                </Text>
              </View>
            </View>
            {/* 3 */}
            <View
              style={{
                width: "100%",
                height: 82,
                backgroundColor: "#FFFFFF",
                justifyContent: "space-evenly",
                borderBottomWidth: 1,
                // borderLeftWidth: 10,
                borderColor: "#333",
                borderRadius: 10,
                position: "relative",
              }}
            >
              <View style={{ marginLeft: 5 }}>
                <View
                  style={{
                    width: 50,
                    marginTop: 5,
                    position: "absolute",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?auto=compress&cs=tinysrgb&w=600",
                    }}
                    style={{
                      backgroundColor: "purple",
                      width: 46,
                      height: 46,
                      //   marginTop: 3,
                      borderRadius: 110,
                      resizeMode: "cover",
                      // borderColor: "#f6ab03",
                      // borderWidth: 1,
                    }}
                  />
                </View>
                <View style={{ width: 130, marginLeft: 55 }}>
                  <Text
                    style={{
                      color: "#333",
                      fontSize: 15,
                      fontWeight: "600",
                    }}
                  >
                    Jeff bezos
                  </Text>
                </View>
                <View style={{ position: "absolute", marginLeft: 300 }}>
                  <Ionicons name="heart" size={24} color="black" />
                  <Text
                    style={{
                      // backgroundColor: "#FF5AB2",
                      // width: 20,
                      // borderRadius: 60,
                      // color: "white",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    1hr ago
                  </Text>
                </View>

                <Text
                  style={{
                    color: "#707070",
                    fontSize: 14,
                    fontWeight: "500",
                    marginLeft: 55,
                  }}
                >
                  Applied for
                  <Text
                    style={{
                      color: "#333",
                      fontSize: 16,
                      fontWeight: "500",
                      marginRight: 30,
                    }}
                  >
                    Java Developer
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 82,
                backgroundColor: "#FFFFFF",
                justifyContent: "space-evenly",
                borderBottomWidth: 1,
                // borderLeftWidth: 10,
                borderColor: "#333",
                borderRadius: 10,
                position: "relative",
              }}
            >
              <View style={{ marginLeft: 5 }}>
                <View
                  style={{
                    width: 50,
                    marginTop: 5,
                    position: "absolute",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?auto=compress&cs=tinysrgb&w=600",
                    }}
                    style={{
                      backgroundColor: "purple",
                      width: 46,
                      height: 46,
                      //   marginTop: 3,
                      borderRadius: 110,
                      resizeMode: "cover",
                      // borderColor: "#f6ab03",
                      // borderWidth: 1,
                    }}
                  />
                </View>
                <View style={{ width: 130, marginLeft: 55 }}>
                  <Text
                    style={{
                      color: "#333",
                      fontSize: 15,
                      fontWeight: "600",
                    }}
                  >
                    Elon musk
                  </Text>
                </View>
                <View style={{ position: "absolute", marginLeft: 300 }}>
                  <Ionicons name="heart" size={24} color="black" />
                  <Text
                    style={{
                      // backgroundColor: "#FF5AB2",
                      // width: 20,
                      // borderRadius: 60,
                      // color: "white",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    1hr ago
                  </Text>
                </View>

                <Text
                  style={{
                    color: "#707070",
                    fontSize: 14,
                    fontWeight: "500",
                    marginLeft: 55,
                  }}
                >
                  Applied for
                  <Text
                    style={{
                      color: "#333",
                      fontSize: 16,
                      fontWeight: "500",
                      marginRight: 30,
                    }}
                  >
                    Java Developer
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 82,
                backgroundColor: "#FFFFFF",
                justifyContent: "space-evenly",
                borderBottomWidth: 1,
                // borderLeftWidth: 10,
                borderColor: "#333",
                borderRadius: 10,
                position: "relative",
              }}
            >
              <View style={{ marginLeft: 5 }}>
                <View
                  style={{
                    width: 50,
                    marginTop: 5,
                    position: "absolute",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?auto=compress&cs=tinysrgb&w=600",
                    }}
                    style={{
                      backgroundColor: "purple",
                      width: 46,
                      height: 46,
                      //   marginTop: 3,
                      borderRadius: 110,
                      resizeMode: "cover",
                      // borderColor: "#f6ab03",
                      // borderWidth: 1,
                    }}
                  />
                </View>
                <View style={{ width: 130, marginLeft: 55 }}>
                  <Text
                    style={{
                      color: "#333",
                      fontSize: 15,
                      fontWeight: "600",
                    }}
                  >
                    Akash
                  </Text>
                </View>
                <View style={{ position: "absolute", marginLeft: 300 }}>
                  <Ionicons name="heart" size={24} color="black" />
                  <Text
                    style={{
                      // backgroundColor: "#FF5AB2",
                      // width: 20,
                      // borderRadius: 60,
                      // color: "white",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    1hr ago
                  </Text>
                </View>

                <Text
                  style={{
                    color: "#707070",
                    fontSize: 14,
                    fontWeight: "500",
                    marginLeft: 55,
                  }}
                >
                  Applied for
                  <Text
                    style={{
                      color: "#333",
                      fontSize: 16,
                      fontWeight: "500",
                      marginRight: 30,
                    }}
                  >
                    Java Developer
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 82,
                backgroundColor: "#FFFFFF",
                justifyContent: "space-evenly",
                borderBottomWidth: 1,
                // borderLeftWidth: 10,
                borderColor: "#333",
                borderRadius: 10,
                position: "relative",
              }}
            >
              <View style={{ marginLeft: 5 }}>
                <View
                  style={{
                    width: 50,
                    marginTop: 5,
                    position: "absolute",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?auto=compress&cs=tinysrgb&w=600",
                    }}
                    style={{
                      backgroundColor: "purple",
                      width: 46,
                      height: 46,
                      //   marginTop: 3,
                      borderRadius: 110,
                      resizeMode: "cover",
                      // borderColor: "#f6ab03",
                      // borderWidth: 1,
                    }}
                  />
                </View>
                <View style={{ width: 130, marginLeft: 55 }}>
                  <Text
                    style={{
                      color: "#4A4242",
                      fontSize: 15,
                      fontWeight: "600",
                    }}
                  >
                    Nagaraj
                  </Text>
                </View>
                <View style={{ position: "absolute", marginLeft: 300 }}>
                  <Ionicons name="heart" size={24} color="black" />
                  <Text
                    style={{
                      // backgroundColor: "#FF5AB2",
                      // width: 20,
                      // borderRadius: 60,
                      // color: "white",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    1hr ago
                  </Text>
                </View>

                <Text
                  style={{
                    color: "#707070",
                    fontSize: 14,
                    fontWeight: "500",
                    marginLeft: 55,
                  }}
                >
                  Applied for
                  <Text
                    style={{
                      color: "#333",
                      fontSize: 16,
                      fontWeight: "500",
                      marginRight: 30,
                    }}
                  >
                    Java Developer
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: "row",
    backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "flex-end",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
  leftSide: {
    flex: 0.5,
  },
  rightContainer: {
    flex: 0.7,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});

//make this component available to the app
export default Jobposterapplied;
