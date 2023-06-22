import { TouchableOpacity } from "react-native";
import { BottomBarIcon, Container } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

interface IconProps {
    id: number,
    active: boolean,
    imageFalse: any,
    imageTrue: any,
    navigation: "mainViewer" | "searchByIngredients" | "favoriteBook" | "profile" 
}


export default function BottomBar() {
    const navigation = useNavigation();
    const route = useRoute();
    const [activeIcon, setActiveIcon] = useState(0);

    const Icon: IconProps[] = [
        {
            id: 1,
            active: true,
            imageFalse: require("../../assets/bottomBar/home.png"),
            imageTrue: require("../../assets/bottomBar/homeGreen.png"),
            navigation: "mainViewer"
    
        },
        {
            id: 2,
            active: false,
            imageFalse: require("../../assets/bottomBar/magnifier.png"),
            imageTrue: require("../../assets/bottomBar/magnifierGreen.png"),
            navigation: "searchByIngredients"

        },
        {
            id: 3,
            active: false,
            imageFalse: require("../../assets/bottomBar/heart.png"),
            imageTrue: require("../../assets/bottomBar/heartGreen.png"),
            navigation: "favoriteBook"

        },
        {
            id: 4,
            active: false,
            imageFalse: require("../../assets/bottomBar/profile.png"),
            imageTrue: require("../../assets/bottomBar/profileGreen.png"),
            navigation: "profile"
        
        },
        
    ]

    const routeToIconMap = {
    mainViewer: 1,
    searchByIngredients: 2,
    favoriteBook: 3,
    profile: 4,
    };

    const handleIconPress = (page: keyof typeof routeToIconMap) => {
    navigation.navigate(page);
    setActiveIcon(routeToIconMap[page]);
    };

    useEffect(() => {
    const { name } = route;
    if (name in routeToIconMap) {
        handleIconPress(name as keyof typeof routeToIconMap);
    }
    }, [route]);

    return(
        <Container style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
            {Icon.map(({ id, imageFalse, imageTrue, navigation }) => (
                <TouchableOpacity key={id} onPress={() => handleIconPress(navigation)}>
                    <BottomBarIcon source={id === activeIcon ? imageTrue : imageFalse} />
                </TouchableOpacity>
            ))}
        </Container>
    )
}