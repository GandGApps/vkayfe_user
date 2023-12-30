import React, { useEffect } from "react";
import {
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import MainNavigator from "./navigations/MainNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
// import Orientation from "react-native-orientation";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { API_KEY } from "./constants";
import { YaMap } from 'react-native-yamap';

YaMap.init(API_KEY);
const MyApp = () => {

  // useEffect(() => {
  //   Orientation.lockToPortrait();
  // });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        style={styles.KeyboardAvoidingView}
        contentContainerStyle={styles.contentContainerStyle}
        enabled={Platform.OS === "ios"}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />
        <MainNavigator />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:getStatusBarHeight(true)

  },
  KeyboardAvoidingView: {
    flex: 1,
    backgroundColor: "#000",
  },
  contentContainerStyle: {
    flex: 1,
    backgroundColor: "#000",
  },

});
export default MyApp;
