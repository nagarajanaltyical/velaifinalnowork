import * as SplashScreen from "expo-splash-screen";
import { I18n } from "i18n-js";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createContext } from "react";
import { StyleSheet, View } from "react-native";
import Jobmainselect from "./app/Pages/jobprovider/Jobtermchoose";
import translations from "./app/Pages/translations";
import Root from "./app/Rootstack/Rootstack";
import { doSomethingWithInput, changeLanguage } from "./app/util/util.js";
export const LocalizationContext = createContext();

//To make the splash screen to stay
SplashScreen.preventAutoHideAsync();
const i18n = new I18n(translations);
export default function App() {
  const [language, setlanguage] = useState("en");
  const [appIsReady, setAppIsReady] = useState(false);
  //for otp frontEnd

  //to get the localize at first
  const localizationContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { language, ...options }),
      language,
      setlanguage,
    }),
    [language]
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
        <Root />
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
