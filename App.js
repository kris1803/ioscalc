import { NativeBaseProvider } from 'native-base';
import MainScreen from './MainScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <MainScreen />
    </NativeBaseProvider>
  );
}


