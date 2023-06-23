import { TouchableOpacity, View } from "react-native";
import {CustomScrollView as ScrollView } from "../../../globalStyles";
import BottomBar from "../../components/BottomBar";
import { BottomSideRightImage, Container, ContainerFavoriteBook, ContainerImages, LeftContainerImages, LeftImage, MainTitle, RightContainerImages, ScrollViewContainer, SeeMore, TitleContainer, TitleFavoriteBook, TopSideRightImage } from "./styles";

export default function FavoriteBook() {
    return(
        <View>
            <ScrollViewContainer>
                <Container>
                    <MainTitle>Favoritos</MainTitle>
                    <ContainerFavoriteBook>
                        <TitleContainer>
                            <TitleFavoriteBook>Favoritos</TitleFavoriteBook>
                            <TouchableOpacity>
                                <SeeMore>Ver mais</SeeMore>
                            </TouchableOpacity>
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
                            <TouchableOpacity  onPress={() => console.log("ola")}>
                                <SeeMore style={{color: 'gray'}}>Ver mais</SeeMore>
                            </TouchableOpacity>
                            
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
            <BottomBar />
        </View>
    )
}