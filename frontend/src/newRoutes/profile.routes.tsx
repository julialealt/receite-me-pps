import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainProfile from "../pages/Profile/MainProfile";
import EditProfile from "../pages/Profile/EditProfile";
import RecentlyViewed from "../pages/Profile/RecentlyViewed";
import FavoriteBook from "../pages/FavoriteBook";
import SignUp from "../pages/SignUp";

export function ProfileRoutes() {

    const { Screen, Navigator } = createNativeStackNavigator();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen
                name='profile'
                component={MainProfile}
            />

            <Screen
                name='editProfile'
                component={EditProfile}
            />

            <Screen
                name='favoriteBook'
                component={FavoriteBook}
            />

            <Screen
                name='recentlyViewed'
                component={RecentlyViewed}
            />

        </Navigator>
    );
}
