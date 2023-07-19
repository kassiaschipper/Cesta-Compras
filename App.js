import { StatusBar,SafeAreaView, View } from "react-native";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";

import mock from "./src/mocks/cesta"
import Cesta from "./src/telas/Cesta";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontCarregada]  = useFonts ({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fontCarregada){
    return null
  }
  
  SplashScreen.hideAsync()
  return (
    <SafeAreaView style={ { flex: 1 } }>
      <StatusBar />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}
