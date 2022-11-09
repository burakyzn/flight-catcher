import RootNavigator from "./src/navigations/RootNavigator";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState, useEffect, useCallback } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import ThemeProvider from "./src/ThemeProvider";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Inter_300Light,
          Inter_400Regular,
          Inter_500Medium,
          Inter_700Bold,
          Inter_600SemiBold,
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayout = useCallback(() => {
    if (appIsReady) SplashScreen.hideAsync();
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    appIsReady && (
      <ThemeProvider>
        <SafeAreaView style={styles.container} onLayout={onLayout}>
          <GestureHandlerRootView style={styles.container}>
            <BottomSheetModalProvider>
              <RootNavigator />
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </SafeAreaView>
      </ThemeProvider>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
