import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InitialSliders from './src/pages/InitialSliders';
import SignUp from './src/pages/SignUp';
import Login from './src/pages/Login';
import MainViewer from './src/pages/MainViewer';
import SearchViewer from './src/pages/SearchViewer';
import MainProfile from './src/pages/Profile/MainProfile';
import EditProfile from './src/pages/Profile/EditProfile';
import RecentlyViewed from './src/pages/Profile/RecentlyViewed';
import SearchByIngredients from './src/pages/SearchByIngredients';
import RecipesByIngredients from './src/pages/RecipesByIngredients';
import RecipeInformations from './src/pages/RecipeInformations';
import FavoriteBook from './src/pages/FavoriteBook';
import BottomBar from './src/components/BottomBar';
import { Routes } from './src/routes';
import CategoryRecipes from './src/pages/CategoryRecipes';

/*import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
  });
  return (
    <Routes />
  );
}
*/





import React from 'react';
import * as Font from 'expo-font';

let customFonts = {
  'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
  'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
  'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <Routes />
      /*
      <View style={styles.container}>
        <Text style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>Inter Black</Text>
        <Text style={{ fontFamily: 'Inter-SemiBoldItalic', fontSize: 30 }}>
          Inter SemiBoldItalic
        </Text>
        <Text style={{ fontSize: 30 }}>Platform Default</Text>
      </View>
      */
    );
  }
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
*/
