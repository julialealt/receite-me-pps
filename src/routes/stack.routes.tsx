import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialSliders from '../pages/InitialSliders';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import MainViewer from '../pages/MainViewer';
import RecipeInformations from '../pages/RecipeInformations';
import CategoryRecipes from '../pages/CategoryRecipes';
import SearchByIngredients from '../pages/SearchByIngredients';
import MainProfile from '../pages/Profile/MainProfile';
import FavoriteBook from '../pages/FavoriteBook';
import EditProfile from '../pages/Profile/EditProfile';
import RecentlyViewed from '../pages/Profile/RecentlyViewed';
import RecipesByIngredients from '../pages/RecipesByIngredients';

const { Screen, Navigator } = createNativeStackNavigator();

export default function StackRoutes() {
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen 
                name='initialSliders'
                component={InitialSliders}
            />
            <Screen 
                name='signUp'
                component={SignUp}
            />
            <Screen 
                name='login'
                component={Login}
            />
            <Screen 
                name='mainViewer'
                component={MainViewer}
            />
            <Screen
                name='recipeInformations'
                component={RecipeInformations}
            />
            <Screen
                name='categoryRecipes'
                component={CategoryRecipes}
            />
            <Screen
                name='searchByIngredients'
                component={SearchByIngredients}
            />
            <Screen
                name='favoriteBook'
                component={FavoriteBook}
            />
            <Screen
                name='profile'
                component={MainProfile}
            />
            <Screen
                name='editProfile'
                component={EditProfile}
            />
            <Screen
                name='recentlyViewed'
                component={RecentlyViewed}
            />
            <Screen
                name='recipesByIngredients'
                component={RecipesByIngredients}
            />
        </Navigator>
    )
}