import { TouchableOpacity } from "react-native";
import { BottomBarIcon, Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface IconProps {
    id: number,
    image: any,
    navigation: () => void
}


export default function BottomBar() {
    const navigation = useNavigation();

    const Icon: IconProps[] = [
        {
            id: 1,
            image: require("../../assets/bottomBar/home.png"),
            navigation: () => navigation.navigate("mainViewer")
    
        },
        {
            id: 2,
            image: require("../../assets/bottomBar/magnifier.png"),
            navigation: () => navigation.navigate("searchByIngredients")

    
        
        },
        {
            id: 3,
            image: require("../../assets/bottomBar/heart.png"),
            navigation: () => navigation.navigate("favoriteBook")

    
        
        },
        {
            id: 4,
            image: require("../../assets/bottomBar/profile.png"),
            navigation: () => navigation.navigate("profile")
        
        },
        
    ]

    return(
        <Container style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
            {Icon.map(({id,image, navigation}) =>(
                <TouchableOpacity key={id} onPress={navigation}>
                    <BottomBarIcon source={image} />
                </TouchableOpacity>
            ))}
        </Container>
    )
}