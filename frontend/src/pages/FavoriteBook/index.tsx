import { View } from "react-native";
import {CustomScrollView as ScrollView } from "../../../globalStyles";
import { BottomSideRightImage, Container, ContainerFavoriteBook, ContainerImages, LeftContainerImages, LeftImage, MainTitle, RightContainerImages, ScrollViewContainer, SeeMore, TitleContainer, TitleFavoriteBook, TopSideRightImage } from "./styles";

import { propsStack } from '../../routes/Models';
import { useNavigation } from "@react-navigation/native";

export default function FavoriteBook() {
    const navigation = useNavigation<propsStack>();

    return(
        <View>
            <ScrollViewContainer>
                <Container>
                    <MainTitle>Favoritos</MainTitle>
                    <ContainerFavoriteBook>
                        <TitleContainer>
                            <TitleFavoriteBook>Favoritos</TitleFavoriteBook>
                            <SeeMore>Ver mais</SeeMore>
                        </TitleContainer>
                        <ContainerImages>
                            <LeftContainerImages>
                                <LeftImage source={require("../../assets/recipes/Ramen2.png")} />
                            </LeftContainerImages>
                            <RightContainerImages>
                                <TopSideRightImage source={require("../../assets/recipes/Ramen2.png")} />
                                <BottomSideRightImage source={require("../../assets/recipes/Ramen2.png")} />
                            </RightContainerImages>
                        </ContainerImages>
                    </ContainerFavoriteBook>
                    <ContainerFavoriteBook>
                        <TitleContainer>
                            <TitleFavoriteBook>Nova Pasta</TitleFavoriteBook>
                            <SeeMore style={{color: 'gray'}}
                            onPress={() => console.log("ola")}>Ver mais</SeeMore>
                        </TitleContainer>
                        <ContainerImages>
                            <LeftContainerImages>
                                <LeftImage />
                            </LeftContainerImages>
                            <RightContainerImages>
                                <TopSideRightImage />
                                <BottomSideRightImage />
                            </RightContainerImages>
                        </ContainerImages>
                    </ContainerFavoriteBook>
                </Container>
            </ScrollViewContainer>
        </View>
    )
}