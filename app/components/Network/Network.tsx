import { Container,
  Content,
  ContentDescription,
  ContentGroup,
  ContentImage,
  ContentTitle,
  HeaderGroup,
  SubTitle,
  Title,
} from "./Style";
import { isMobile } from "react-device-detect"
import homeIcon from "../../../assets/imgs/home.png";
import starIcon from "../../../assets/imgs/start.png";

const Network: React.FC = () => {
  return(
    <Container isMobile={isMobile}>
      <HeaderGroup>
        <Title isMobile={isMobile}>The value network of gaming</Title>
        <SubTitle>The fundamental protocol that allows anyone to create gaming applications built on top of player identities.</SubTitle>
      </HeaderGroup>
      <ContentGroup isMobile={isMobile}>
        <Content isMobile={isMobile}>
          <ContentTitle>Gaming social layer</ContentTitle>
          <ContentDescription>Gamers take control of their data.</ContentDescription>
          <ContentImage src={homeIcon.src} alt="Home" />
        </Content>
        <Content isMobile={isMobile}>
          <ContentTitle>Build next-gen fat dapps</ContentTitle>
          <ContentDescription>Plug any apps on top of the gaming social layer.</ContentDescription>
          <ContentImage src={starIcon.src} alt="Star" />
        </Content>
      </ContentGroup>
    </Container>
  )
}

export default Network;