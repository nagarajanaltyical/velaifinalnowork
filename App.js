import * as SplashScreen from "expo-splash-screen";
import { I18n } from "i18n-js";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useReducer,
} from "react";
import { createContext } from "react";
import { StyleSheet, View } from "react-native";
import { AUthReducer, Inital_State } from "./app/Authreducer";

import Jobmainselect from "./app/Pages/jobprovider/Jobtermchoose";
import SwiperCard from "./app/Pages/Post";
import translations from "./app/Pages/translations";
import Root from "./app/Rootstack/Rootstack";
import { doSomethingWithInput, changeLanguage } from "./app/util/util.js";
export const LocalizationContext = createContext();
export const AuthContext = createContext();

//To make the splash screen to stay
SplashScreen.preventAutoHideAsync();
const i18n = new I18n(translations);
export default function App() {
  const [language, setlanguage] = useState("en");
  const [userDetails, setuserdetails] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);
  const [state, dispatch] = useReducer(AUthReducer, Inital_State);

  //for otp frontEnd

  //to get the localize at first
  const localizationContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { language, ...options }),
      language,
      setlanguage,
      userDetails: userDetails,
      setuserdetails: (userDetails) => setuserdetails(userDetails),
    }),
    [language, userDetails]
  );

  const authContext = useMemo(
    () => ({
      isdetails: () => {
        dispatch({ type: "IS_Deatils_given" });
      },
      getstate: () => {
        console.log(state);
      },
    }),
    [state]
  );
  console.log("i called");
  i18n.locale = language;
  //to run at first

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.main} onLayout={onLayoutRootView}>
      <LocalizationContext.Provider value={localizationContext}>
        <AuthContext.Provider value={{ state, dispatch }}>
          <Root />
        </AuthContext.Provider>
      </LocalizationContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

// import LottieView from "lottie-react-native";
// import React, { useRef } from "react";
// import { Animated, SafeAreaView, StatusBar, Text, View } from "react-native";
// import { ImageCard } from "./app/Lottie/assets/ImageCard";
// import styles from "./app/Lottie/assets/AppStyles";
// import Assets from "./app/Lottie/assets";
// import { StaticData } from "./app/Lottie/StaticData";

// const App = () => {
//   const scrollPosition = useRef(new Animated.Value(0)).current;

//   const handleScroll = ({ nativeEvent }) => {
//     const calculatedScrollPosition =
//       nativeEvent.contentOffset.y /
//       (nativeEvent.contentSize.height - nativeEvent.layoutMeasurement.height);
//     scrollPosition.setValue(calculatedScrollPosition);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar
//         backgroundColor={"rgb(255, 255, 255)"}
//         barStyle={"dark-content"}
//       />
//       <View style={styles.header}>
//         <LottieView
//           progress={scrollPosition.interpolate({
//             inputRange: [0, 1],
//             outputRange: [0, 1],
//             extrapolate: "clamp",
//           })}
//           source={Assets.lottieFiles.planePath}
//           colorFilters={[{ keypath: "Plane", color: "rgb(255, 100, 0)" }]}
//         />
//         <Text style={styles.infoText}>
//           {"Long Press Image to Like / Unlike"}
//         </Text>
//       </View>
//       <Animated.FlatList
//         bounces={false}
//         showsVerticalScrollIndicator={false}
//         scrollEventThrottle={1}
//         onScroll={handleScroll}
//         data={StaticData}
//         keyExtractor={(item) => item?.key}
//         renderItem={({ item }) => <ImageCard data={item} />}
//         contentContainerStyle={styles.list}
//       />
//     </SafeAreaView>
//   );
// };

// export default App;
