// use client
import {
  Avatar,
  AvatarGroup,
  AvatarSection,
  Container,
  Description,
  Frame,
  Header,
  Id,
  Idlabel,
  JoinButton,
  JoinDiscord,
  JoinText,
  Launchpad,
  LaunchpadGroup,
  LaunchpadText,
  LeftImage,
  LockImage,
  LockSection,
  RightGroup,
  RightImage,
  ScrollDown,
  ScrollDownIcon,
  ScrollDownText,
  Structure,
  Title,
} from "./Style";
import { isMobile } from "react-device-detect";
import xBorg1 from "../../../assets/imgs/xBorg1.png";
import xBorg2 from "../../../assets/imgs/xBorg2.png";
import scrolldown from "../../../assets/imgs/scrolldown.svg";
import avatar from "../../../assets/imgs/avatar.png";
import lock from "../../../assets/imgs/lock.svg";

const Infrastructure: React.FC = () => {
  return (
    <Container>
      {isMobile ? null : <LeftImage src={xBorg1.src} alt="xBorg1" />}
      <Structure isMobile={isMobile}>
        <JoinDiscord isMobile={isMobile}>
          <Header>lorem ipsum dolor</Header>
          <Frame>
            <Title isMobile={isMobile}>game-changing infrastructure</Title>
            <Description>
              A decentralised, non-custodial social graph, empowering players to
              take full ownership of their gaming identities and enabling
              developers to build next-gen applications.
            </Description>
          </Frame>
          <JoinButton>
            <JoinText>Join Discord</JoinText>
          </JoinButton>
        </JoinDiscord>
        <RightGroup isMobile={isMobile}>
          <RightImage src={xBorg2.src} alt="xBorg2" />
          <AvatarGroup>
            <AvatarSection>
              <Avatar src={avatar.src} alt="Avatar" />
              <Idlabel>User id:</Idlabel>
              <Id>XBorg001</Id>
            </AvatarSection>
            <LockSection>
              <LockImage src={lock.src} alt="Lock" />
              <Launchpad isMobile={isMobile}>
                <LaunchpadText>Soulbound Launchpad</LaunchpadText>
              </Launchpad>
              <LaunchpadGroup>
                <Launchpad isMobile={isMobile}>
                  <LaunchpadText>Soulbound Launchpad</LaunchpadText>
                </Launchpad>
                <Launchpad isMobile={isMobile}>
                  <LaunchpadText>Soulbound Launchpad</LaunchpadText>
                </Launchpad>
              </LaunchpadGroup>
            </LockSection>
          </AvatarGroup>
        </RightGroup>
      </Structure>
      <ScrollDown>
        <ScrollDownText>Scroll down</ScrollDownText>
        <ScrollDownIcon src={scrolldown.src} alt="Scroll Down" />
      </ScrollDown>
    </Container>
  );
};

export default Infrastructure;
