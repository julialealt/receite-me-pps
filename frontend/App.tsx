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

export default function App() {
  return (
    <Routes />
  );
}
