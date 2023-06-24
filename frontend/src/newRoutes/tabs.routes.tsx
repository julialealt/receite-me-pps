import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import GreenHomeSvg from "../assets/tabNavigation/GreenHome.svg"
import BlackHomeSvg from "../assets/tabNavigation/BlackHome.svg"
import GreenSearchSvg from "../assets/tabNavigation/GreenSearch.svg"
import BlackSearchSvg from "../assets/tabNavigation/BlackSearch.svg"
import GreenHeartSvg from "../assets/tabNavigation/GreenHeart.svg"
import BlackHeartSvg from "../assets/tabNavigation/BlackHeart.svg"
import GreenProfileSvg from "../assets/tabNavigation/GreenProfile.svg"
import BlackProfileSvg from "../assets/tabNavigation/BlackProfile.svg"
import { HomeRoutes } from "./home.routes";
import SearchByIngredients from "../pages/SearchByIngredients";
import Favorites from "../pages/FavoriteBook";
import { ProfileRoutes } from "./profile.routes";


export function TabsRoutes() {

    const { Navigator, Screen } = createBottomTabNavigator();

    return (
        <Navigator screenOptions={{ 
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
                name="homeRoutes" 
                component={HomeRoutes}
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
                name="search"  
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
                name="favorites" 
                component={Favorites}
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
                name="profileRoutes" 
                component={ProfileRoutes}
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
