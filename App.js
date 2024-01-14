import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular,
} from "@expo-google-fonts/inter"

import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <>
      <StatusBar translucent barStyle='light-content' backgroundColor="transparent" />
      <Home />
    </>
  );
}
