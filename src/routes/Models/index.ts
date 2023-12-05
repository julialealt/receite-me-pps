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
        value: string
    }
    SearchByIngredients: undefined
    RecipesByIngredients: {
        ingredients: string[]
    }

    Favorites: undefined
    FavoriteRecipes: {
        idFolder: number;
    }
    FavoriteBook: undefined
    Profile: undefined
    EditProfile: undefined
    RecentlyViewed: undefined
    RecoveryPassword: {
        email: string;
    }
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>
