import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainViewer from "../pages/MainViewer";
import RecipeInformations from "../pages/RecipeInformations";
import CategoryRecipes from "../pages/CategoryRecipes";

export function HomeRoutes() {

    const { Screen, Navigator } = createNativeStackNavigator();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
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
        </Navigator>
    );
}
