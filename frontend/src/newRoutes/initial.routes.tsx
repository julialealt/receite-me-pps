import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialSliders from '../pages/InitialSliders';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';

const { Screen, Navigator } = createNativeStackNavigator();

export function InitialRoutes() {
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
        </Navigator>
    )
}
