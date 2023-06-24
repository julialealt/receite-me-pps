import { NavigationContainer } from "@react-navigation/native";
import { InitialRoutes } from "./initial.routes";
import { TabsRoutes } from "./tabs.routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export function NewRoutes() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Initial" component={InitialRoutes}/>
                <Stack.Screen name="Home" component={TabsRoutes}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

}
