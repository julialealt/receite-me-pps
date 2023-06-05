import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InitialSliders from './src/pages/InitialSliders';
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import MainViewer from './src/pages/MainViewer';
import SearchViewer from './src/pages/SearchViewer';
import MainProfile from './src/pages/Profile/MainProfile';
import EditProfile from './src/pages/Profile/EditProfile';
import RecentlyViewed from './src/pages/Profile/RecentlyViewed';
import SearchByIngredients from './src/pages/SearchByIngredients';
import SelectFilter from './src/components/SelectFilter';

export default function App() {
  return (
      <SelectFilter />
  );
}
