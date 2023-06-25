import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { propsNavigationStack } from '../Models';

import GreenHomeSvg from "../../assets/tabNavigation/GreenHome.svg"
import BlackHomeSvg from "../../assets/tabNavigation/BlackHome.svg"
import GreenSearchSvg from "../../assets/tabNavigation/GreenSearch.svg"
import BlackSearchSvg from "../../assets/tabNavigation/BlackSearch.svg"
import GreenHeartSvg from "../../assets/tabNavigation/GreenHeart.svg"
import BlackHeartSvg from "../../assets/tabNavigation/BlackHeart.svg"
import GreenProfileSvg from "../../assets/tabNavigation/GreenProfile.svg"
import BlackProfileSvg from "../../assets/tabNavigation/BlackProfile.svg"
import MainViewer from '../../pages/MainViewer';
import SearchByIngredients from '../../pages/SearchByIngredients';
import FavoriteBook from '../../pages/FavoriteBook';
import MainProfile from '../../pages/Profile/MainProfile';

const { Navigator, Screen } = createBottomTabNavigator<propsNavigationStack>();

export default function Tab() {

    return (
        <Navigator 
        initialRouteName='MainViewer'
        screenOptions={{
            headerShown: false, tabBarShowLabel: false,
            tabBarStyle: {
                position: "absolute",
                backgroundColor: "#FFFFFF",
                borderTopWidth: 0,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                height: 80
            }
         }}>
            <Screen 
                name="MainViewer" 
                component={MainViewer}
                options={{ 
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <GreenHomeSvg/>
                        }
                        return <BlackHomeSvg/>
                    }
                }}
            />

            <Screen 
                name="SearchByIngredients"  
                component={SearchByIngredients}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <GreenSearchSvg/>
                        }
                        return <BlackSearchSvg/>
                    }
                }}
            />

            <Screen 
                name="Favorites" 
                component={FavoriteBook}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <GreenHeartSvg/>
                        }
                        return <BlackHeartSvg/>
                    }
                }}
            />

            <Screen 
                name="Profile" 
                component={MainProfile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <GreenProfileSvg/>
                        }
                        return <BlackProfileSvg/>
                    }
                }}
            />

        </Navigator>
    );
}
