import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IntroductionOne from './src/pages/IntroductionOne';
import Waves from './src/components/Waves';

export default function App() {
  return (
      <IntroductionOne />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});
