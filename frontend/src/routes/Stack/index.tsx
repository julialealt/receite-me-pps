import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsNavigationStack } from '../Models';

import InitialSliders from '../../pages/InitialSliders';
import SignUp from '../../pages/SignUp';
import Login from '../../pages/Login';
import Tab from '../Tab';
import RecipeInformations from '../../pages/RecipeInformations';
import CategoryRecipes from '../../pages/CategoryRecipes';
import RecipesByIngredients from '../../pages/RecipesByIngredients';
import EditProfile from '../../pages/Profile/EditProfile';
import RecentlyViewed from '../../pages/Profile/RecentlyViewed';

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

export default function() {
    return(
        <Navigator 
        initialRouteName='InitialSliders'
        screenOptions={{headerShown: false}}>

            <Screen 
            name='InitialSliders' 
            component={InitialSliders}/>

            <Screen 
            name='SignUp' 
            component={SignUp}/>

            <Screen 
            name='Login' 
            component={Login}/>

            <Screen 
            name='Tab' 
            component={Tab}/>

            <Screen 
            name='RecipeInformations' 
            component={RecipeInformations}/>

            <Screen 
            name='CategoryRecipes' 
            component={CategoryRecipes}/>

            <Screen
            name='RecipesByIngredients'
            component={RecipesByIngredients}/>

            <Screen
            name='EditProfile'
            component={EditProfile}/>

            <Screen
            name='RecentlyViewed'
            component={RecentlyViewed}/>

        </Navigator>
    )
}
