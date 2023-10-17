export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            initialSliders: undefined;
            signUp: undefined;
            login: undefined;
            mainViewer: undefined;
            recipeInformations: {
                id: number;
            }
            categoryRecipes: {
                category: string;
            }
            searchByIngredients: undefined;
            recipesByIngredients: {[
                id: number,
                ingredients: string,
            ]}
            //Profile
            favoriteBook: undefined;
            profile: undefined;
            editProfile: undefined;
            recentlyViewed: undefined;
            
            recoveryPassword: undefined;
        }
    }
}