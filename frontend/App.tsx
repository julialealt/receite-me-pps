import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Imgtest } from './globalStyles';
import IntroductionOne from './src/pages/IntroductionOne';

export default function App() {
  return (
    <View style={styles.container}>
      <IntroductionOne />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
