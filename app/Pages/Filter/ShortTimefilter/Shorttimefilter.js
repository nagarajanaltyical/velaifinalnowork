import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimension,
  FlatList,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import Location from "../Location";
import MyComponent from "../Category";
import Workmode from "../Workmode";
import Duration from "../Duration";
import Salery from "../Salery";
import Education from "../Education";
import Experiance from "../Experiance";
import Company from "../ComapanySearch";
import Post from "../Post";
import { LinearGradient } from "expo-linear-gradient";

const listTab = [
  {
    status: "Location",

    icon: (
      <Image
        resizeMode="contain"
        style={{ height: 30, width: 30 }}
        source={require("../../../images/Imagefilter/locationpin.png")}
      />
    ),
  },
  {
    status: "Category",

    icon: (
      <Image
        resizeMode="contain"
        style={{ height: 30, width: 30 }}
        source={require("../../../images/Imagefilter/categories.png")}
      />
    ),
  },
  {
    status: "Duration",
    icon: (
      <Image
        resizeMode="contain"
        style={{ height: 30, width: 30 }}
        source={require("../../../images/Imagefilter/hourglass.png")}
      />
    ),
  },
  //   {
  //     status: "Work Mode",
  //     icon: (
  //       <Image
  //         resizeMode="contain"
  //         style={{ height: 30, width: 30 }}
  //         source={require("../../../images/online-work.png")}
  //       />
  //     ),
  //   },
  {
    status: "Salery",
    icon: (
      <Image
        resizeMode="contain"
        style={{ height: 30, width: 30 }}
        source={require("../../../images/Imagefilter/payment.png")}
      />
    ),
  },
  //   {
  //     status: "Education",
  //     icon: (
  //       <Image
  //         resizeMode="contain"
  //         style={{ height: 30, width: 30 }}
  //         source={require("../../../images/graduation-cap.png")}
  //       />
  //     ),
  //   },
  //   {
  //     status: "Experiance",
  //     icon: (
  //       <Image
  //         resizeMode="contain"
  //         style={{ height: 30, width: 30 }}
  //         source={require("../../../images/online-work.png")}
  //       />
  //     ),
  //   },
  //   {
  //     status: "Company",

  //     icon: (
  //       <Image
  //         resizeMode="contain"
  //         style={{ height: 30, width: 30 }}
  //         source={require("../../../images/office-building.png")}
  //       />
  //     ),
  //   },
  {
    status: "Posted by",
    icon: (
      <Image
        resizeMode="contain"
        style={{ height: 30, width: 30 }}
        source={require("../../../images/Imagefilter/postnote.png")}
      />
    ),
  },
];

// Linking content
const data = [
  {
    name: <Location />,
    text: "This is my homepage. Here I welcome you to my website and try me best to make a good impression. I tell you about the services I provide and encourage you to venture into my site.",
    status: "Location",
  },
  {
    name: <MyComponent />,
    text: "This is my homepage. Here I welcome you to my website and try me best to make a good impression. I tell you about the services I provide and encourage you to venture into my site.",
    status: "Category",
  },

  {
    name: <Duration />,
    text: "Here I go into details about myself and my business, including the services we provide, how we started and our overall ethos.",
    status: "Duration",
  },
  //   {
  //     name: <Workmode />,
  //     text: "Here we give you information on how to contact us for business discussions and possible collaborations.",
  //     status: "Work Mode",
  //   },
  {
    name: <Salery />,
    text: "Here we give you information on how to contact us for business discussions and possible collaborations.",
    status: "Salery",
  },
  //   {
  //     name: <Education />,
  //     text: "Here we give you information on how to contact us for business discussions and possible collaborations.",
  //     status: "Education",
  //   },
  //   {
  //     name: <Experiance />,
  //     text: "This is my homepage. Here I welcome you to my website and try me best to make a good impression. I tell you about the services I provide and encourage you to venture into my site.",
  //     status: "Experiance",
  //   },
  //   {
  //     name: <Company />,

  //     text: "work",
  //     status: "Company",
  //   },
  {
    name: <Post />,
    text: "Here we give you information on how to contact us for business discussions and possible collaborations.",
    status: "Posted by",
  },
];

export default function Shorttimefilter(navigation) {
  const [status, setStatus] = useState("location");
  const [dataList, setDataList] = useState([
    ...data.filter((e) => e.status === "location"),
  ]);

  const setStatusFilter = (status) => {
    if (status !== "location") {
      setDataList([...data.filter((e) => e.status === status)]);
    } else {
      setDataList([...data.filter((e) => e.status === "location")]);
    }

    setStatus(status);
  };
  return (
    <>
      <StatusBar style={"auto"} />
      <View style={styles.container}>
        <View style={styles.listTab}>
          {listTab.map((e) => {
            return (
              <TouchableOpacity
                style={[
                  styles.btnTab,
                  status === e.status && styles.btnTabActive,
                ]}
                onPress={() => setStatusFilter(e.status)}
              >
                <Text
                  style={[
                    styles.iconTab,
                    status === e.status && styles.textTabActive,
                  ]}
                >
                  {e.icon}
                </Text>
                <Text style={styles.textTab}> {e.status}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <FlatList
          data={dataList}
          keyExtractor={(e, i) => i.toString()}
          renderItem={renderItem}
        />
        {/* <View style={{ backgroundColor: "red", marginRight: -30 }}>
          <Text>Choose your preference</Text>
        </View> */}
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <TouchableOpacity
        // onPress={() => navigation.navigate("Userprofile")}
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
              width: 200,
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
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
              Apply Filter
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
}
const renderItem = ({ item, index }) => {
  return (
    <View key={index} style={styles.itemContainer}>
      <Text>{item.name}</Text>
      {/* <Text>{item.text}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 1,

    justifyContent: "center",
  },
  listTab: {
    borderColor: "#f5f5f5",
    borderWidth: 2,
    height: "60%",
    backgroundColor: "#1E5966",
    flexDirection: "column",
    justifyContent: "space-evenly",
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 20,
    marginLeft: 5,
    borderRadius: 20,
    // backgroundColor: "red",
  },
  btnTab: {
    // width: 0,
    // flexDirection: "column",
    marginBottom: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  textTab: {
    fontSize: 12,
    color: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  iconTab: {
    height: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  btnTabActive: {
    backgroundColor: "#333",
    height: "18%",
    borderRadius: 20,
  },
  textTabActive: {
    color: "#fff",
  },
  itemContainer: {
    paddingVertical: 15,
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    marginLeft: 30,
    marginTop: 10,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
  },
});
