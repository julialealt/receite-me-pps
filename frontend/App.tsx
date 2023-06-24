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
import { Routes } from './src/routes';
import CategoryRecipes from './src/pages/CategoryRecipes';

import * as React from 'react';
import * as Font from 'expo-font';
import { NewRoutes } from './src/newRoutes';

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
      <NewRoutes />
    );
  }
}
