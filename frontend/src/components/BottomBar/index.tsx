import { TouchableOpacity } from "react-native";
import { BottomBarIcon, Container } from "./styles";

const Icon = [
    require("../../assets/bottomBar/home.png"),
    require("../../assets/bottomBar/magnifier.png"),
    require("../../assets/bottomBar/heart.png"),
    require("../../assets/bottomBar/profile.png"),

]

export default function BottomBar() {
    return(
        <Container>
            {Icon.map((item, index) =>(
                <TouchableOpacity key={index}>
                    <BottomBarIcon source={item} />
                </TouchableOpacity>
            ))}
        </Container>
    )
}