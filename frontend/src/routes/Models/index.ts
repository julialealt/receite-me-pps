import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type propsNavigationStack = {
    InitialSliders: undefined
    SignUp: undefined
    Login: undefined
    Tab: undefined

    MainViewer: undefined
    RecipeInformations: {
        id: number
    }
    CategoryRecipes: {
        category: string
    }
    SearchByIngredients: undefined
    RecipesByIngredients: {
        ingredients: string[]
    }

    Favorites: undefined
    FavoriteBook: undefined
    Profile: undefined
    EditProfile: undefined
    RecentlyViewed: undefined
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>
