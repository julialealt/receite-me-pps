import {CustomScrollView as ScrollView } from "../../../globalStyles";
import { BottomSideRightImage, Container, ContainerFavoriteBook, ContainerImages, LeftContainerImages, LeftImage, MainTitle, RightContainerImages, ScrollViewContainer, SeeMore, TitleContainer, TitleFavoriteBook, TopSideRightImage } from "./styles";

export default function FavoriteBook() {
    return(
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
            </Container>
        </ScrollViewContainer>
    )
}