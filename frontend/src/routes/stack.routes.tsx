import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialSliders from '../pages/InitialSliders';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import MainViewer from '../pages/MainViewer';

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
            
        </Navigator>
    )
}