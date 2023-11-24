import { Avatar,
  AvatarImage,
  AvatarModal,
  AvatarName,
  AvatarRed,
  AvatarRedName,
  Avatars,
  Container,
  Description,
  GreyText,
  LeftBackground,
  Metadata,
  PlayerMetadata,
  RedText,
  Row,
  TextGroup,
  TextRow,
  Title,

} from "./Style";
import {useState} from "react";
import { isMobile } from "react-device-detect"
import avatar1 from "../../../assets/imgs/avatar1.png";
import avatar2 from "../../../assets/imgs/avatar2.png";
import avatar3 from "../../../assets/imgs/avatar3.png";
import avatar4 from "../../../assets/imgs/avatar4.png";
import avatar5 from "../../../assets/imgs/avatar5.png";
import avatar6 from "../../../assets/imgs/avatar6.png";
import map from "../../../assets/imgs/map.png";

const GamingWeb: React.FC = () => {
  const [isHover, setIsHover] = useState(false);
  const [isRight, setIsRight] = useState(false);

  const mouseEnter = (data: boolean) => {
    setIsHover(true)
    setIsRight(data)
  }

  return(
    <Container isMobile={isMobile}>
      <TextGroup isMobile={isMobile}>
        <Title isMobile={isMobile}>The New Gaming Web</Title>
        <Description>At the core of the XBorg Data Graph Protocol lies a dynamic and interconnected network of gaming profiles. Each player's profile is represented as a unique ERC-721 NFT, complete with metadata unique to their gaming journey.</Description>
      </TextGroup>
      <Avatars>
        <Row isMobile={isMobile}>
          <Avatar onMouseEnter={()=>mouseEnter(false)} onMouseLeave={()=>setIsHover(false)} isHover={isHover} isRight={isRight} isMobile={isMobile}>
            <AvatarImage src={avatar1.src} alt="Avatar1" />
            <AvatarName>MonkeyIslander872</AvatarName>
            <AvatarModal isMobile={isMobile}>
                <AvatarRed>
                  <AvatarImage src={avatar1.src} alt="Avatar1" />
                  <AvatarRedName>MonkeyIslander872</AvatarRedName>
                </AvatarRed>
                <Metadata>
                  <PlayerMetadata>player_metadata = &#123;</PlayerMetadata>
                  <TextRow>
                    <GreyText>"player_name": "JohnDoe123",</GreyText>
                  </TextRow>
                  <TextRow>
                    <GreyText>"gaming_platform": "PC",</GreyText>
                  </TextRow>
                  <TextRow>
                    <GreyText>"game_level":</GreyText>
                    <RedText>25</RedText>
                    <GreyText>,</GreyText>
                  </TextRow>
                  <TextRow>
                    <GreyText>"achievements": &#91;"Master of the Arena", "Legendary Explorer"&#93;,</GreyText>
                  </TextRow>
                  <TextRow>
                    <GreyText>"total_score":</GreyText>
                    <RedText>2000</RedText>
                    <GreyText>,</GreyText>
                  </TextRow>
                  <TextRow>
                    <GreyText>"preferred_game_mode": "Team Deathmatch",</GreyText>
                  </TextRow>
                  <TextRow>
                    <GreyText>"collected items": &#123;</GreyText>
                  </TextRow>
                  <TextRow>
                    <TextRow>
                      <GreyText>"weapon": "Legendary Sword",</GreyText></TextRow>
                  </TextRow>
                  <TextRow>
                    <TextRow>
                      <GreyText>"armor": "Epic Plate Armor",</GreyText></TextRow>
                  </TextRow>
                  <TextRow>
                    <TextRow>
                      <GreyText>"pet": "Fire Dragon",</GreyText></TextRow>
                  </TextRow>
                  <TextRow>
                    <GreyText>&#125;</GreyText>
                  </TextRow>
                  <PlayerMetadata>&#125;</PlayerMetadata>
                </Metadata>
            </AvatarModal>
          </Avatar>
          <Avatar onMouseEnter={()=>mouseEnter(true)} onMouseLeave={()=>setIsHover(false)} isHover={isHover} isRight={isRight} isMobile={isMobile}>
            <AvatarImage src={avatar2.src} alt="Avatar2" />
            <AvatarName>mean_deal_</AvatarName>
            <AvatarModal isMobile={isMobile}>
              <AvatarRed>
                <AvatarImage src={avatar2.src} alt="Avatar2" />
                <AvatarRedName>mean_deal_</AvatarRedName>
              </AvatarRed>
              <Metadata>
                <PlayerMetadata>player_metadata = &#123;</PlayerMetadata>
                <TextRow>
                  <GreyText>"player_name": "JohnDoe123",</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"gaming_platform": "PC",</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"game_level":</GreyText>
                  <RedText>25</RedText>
                  <GreyText>,</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"achievements": &#91;"Master of the Arena", "Legendary Explorer"&#93;,</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"total_score":</GreyText>
                  <RedText>2000</RedText>
                  <GreyText>,</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"preferred_game_mode": "Team Deathmatch",</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"collected items": &#123;</GreyText>
                </TextRow>
                <TextRow>
                  <TextRow>
                    <GreyText>"weapon": "Legendary Sword",</GreyText></TextRow>
                </TextRow>
                <TextRow>
                  <TextRow>
                    <GreyText>"armor": "Epic Plate Armor",</GreyText></TextRow>
                </TextRow>
                <TextRow>
                  <TextRow>
                    <GreyText>"pet": "Fire Dragon",</GreyText></TextRow>
                </TextRow>
                <TextRow>
                  <GreyText>&#125;</GreyText>
                </TextRow>
                <PlayerMetadata>&#125;</PlayerMetadata>
              </Metadata>
            </AvatarModal>
          </Avatar>
        </Row>
        <Row isMobile={isMobile}>
          <Avatar onMouseEnter={()=>mouseEnter(false)} onMouseLeave={()=>setIsHover(false)} isHover={isHover} isRight={isRight} isMobile={isMobile}>
            <AvatarImage src={avatar3.src} alt="Avatar3" />
            <AvatarName>TennisChallenger</AvatarName>
            <AvatarModal isMobile={isMobile}>
              <AvatarRed>
                <AvatarImage src={avatar3.src} alt="Avatar3" />
                <AvatarRedName>TennisChallenger</AvatarRedName>
              </AvatarRed>
              <Metadata>
                <PlayerMetadata>player_metadata = &#123;</PlayerMetadata>
                <TextRow>
                  <GreyText>"player_name": "JohnDoe123",</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"gaming_platform": "PC",</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"game_level":</GreyText>
                  <RedText>25</RedText>
                  <GreyText>,</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"achievements": &#91;"Master of the Arena", "Legendary Explorer"&#93;,</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"total_score":</GreyText>
                  <RedText>2000</RedText>
                  <GreyText>,</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"preferred_game_mode": "Team Deathmatch",</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"collected items": &#123;</GreyText>
                </TextRow>
                <TextRow>
                  <TextRow>
                    <GreyText>"weapon": "Legendary Sword",</GreyText></TextRow>
                </TextRow>
                <TextRow>
                  <TextRow>
                    <GreyText>"armor": "Epic Plate Armor",</GreyText></TextRow>
                </TextRow>
                <TextRow>
                  <TextRow>
                    <GreyText>"pet": "Fire Dragon",</GreyText></TextRow>
                </TextRow>
                <TextRow>
                  <GreyText>&#125;</GreyText>
                </TextRow>
                <PlayerMetadata>&#125;</PlayerMetadata>
              </Metadata>
            </AvatarModal>
          </Avatar>
          <Avatar onMouseEnter={()=>mouseEnter(true)} onMouseLeave={()=>setIsHover(false)} isHover={isHover} isRight={isRight} isMobile={isMobile}>
            <AvatarImage src={avatar4.src} alt="Avatar4" />
            <AvatarName>DoozieWoozie</AvatarName>
            <AvatarModal isMobile={isMobile}>
              <AvatarRed>
                <AvatarImage src={avatar4.src} alt="Avatar4" />
                <AvatarRedName>DoozieWoozie</AvatarRedName>
              </AvatarRed>
              <Metadata>
                <PlayerMetadata>player_metadata = &#123;</PlayerMetadata>
                <TextRow>
                  <GreyText>"player_name": "JohnDoe123",</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"gaming_platform": "PC",</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"game_level":</GreyText>
                  <RedText>25</RedText>
                  <GreyText>,</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"achievements": &#91;"Master of the Arena", "Legendary Explorer"&#93;,</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"total_score":</GreyText>
                  <RedText>2000</RedText>
                  <GreyText>,</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"preferred_game_mode": "Team Deathmatch",</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"collected items": &#123;</GreyText>
                </TextRow>
                <TextRow>
                  <TextRow>
                    <GreyText>"weapon": "Legendary Sword",</GreyText></TextRow>
                </TextRow>
                <TextRow>
                  <TextRow>
                    <GreyText>"armor": "Epic Plate Armor",</GreyText></TextRow>
                </TextRow>
                <TextRow>
                  <TextRow>
                    <GreyText>"pet": "Fire Dragon",</GreyText></TextRow>
                </TextRow>
                <TextRow>
                  <GreyText>&#125;</GreyText>
                </TextRow>
                <PlayerMetadata>&#125;</PlayerMetadata>
              </Metadata>
            </AvatarModal>
          </Avatar>
        </Row>
        <Row isMobile={isMobile}>
          <Avatar onMouseEnter={()=>mouseEnter(false)} onMouseLeave={()=>setIsHover(false)} isHover={isHover} isRight={isRight} isMobile={isMobile}>
            <AvatarImage src={avatar5.src} alt="Avatar5" />
            <AvatarName>tired0fbeIngWired</AvatarName>
            <AvatarModal isMobile={isMobile}>
              <AvatarRed>
                <AvatarImage src={avatar5.src} alt="Avatar5" />
                <AvatarRedName>tired0fbeIngWired</AvatarRedName>
              </AvatarRed>
              <Metadata>
                <PlayerMetadata>player_metadata = &#123;</PlayerMetadata>
                <TextRow>
                  <GreyText>"player_name": "JohnDoe123",</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"gaming_platform": "PC",</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"game_level":</GreyText>
                  <RedText>25</RedText>
                  <GreyText>,</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"achievements": &#91;"Master of the Arena", "Legendary Explorer"&#93;,</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"total_score":</GreyText>
                  <RedText>2000</RedText>
                  <GreyText>,</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"preferred_game_mode": "Team Deathmatch",</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"collected items": &#123;</GreyText>
                </TextRow>
                <TextRow>
                  <TextRow>
                    <GreyText>"weapon": "Legendary Sword",</GreyText></TextRow>
                </TextRow>
                <TextRow>
                  <TextRow>
                    <GreyText>"armor": "Epic Plate Armor",</GreyText></TextRow>
                </TextRow>
                <TextRow>
                  <TextRow>
                    <GreyText>"pet": "Fire Dragon",</GreyText></TextRow>
                </TextRow>
                <TextRow>
                  <GreyText>&#125;</GreyText>
                </TextRow>
                <PlayerMetadata>&#125;</PlayerMetadata>
              </Metadata>
            </AvatarModal>
          </Avatar>
          <Avatar onMouseEnter={()=>mouseEnter(true)} onMouseLeave={()=>setIsHover(false)} isHover={isHover} isRight={isRight} isMobile={isMobile}>
            <AvatarImage src={avatar6.src} alt="Avatar6" />
            <AvatarName>Greendragon_</AvatarName>
            <AvatarModal isMobile={isMobile}>
              <AvatarRed>
                <AvatarImage src={avatar6.src} alt="Avatar6" />
                <AvatarRedName>Greendragon_</AvatarRedName>
              </AvatarRed>
              <Metadata>
                <PlayerMetadata>player_metadata = &#123;</PlayerMetadata>
                <TextRow>
                  <GreyText>"player_name": "JohnDoe123",</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"gaming_platform": "PC",</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"game_level":</GreyText>
                  <RedText>25</RedText>
                  <GreyText>,</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"achievements": &#91;"Master of the Arena", "Legendary Explorer"&#93;,</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"total_score":</GreyText>
                  <RedText>2000</RedText>
                  <GreyText>,</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"preferred_game_mode": "Team Deathmatch",</GreyText>
                </TextRow>
                <TextRow>
                  <GreyText>"collected items": &#123;</GreyText>
                </TextRow>
                <TextRow>
                  <TextRow>
                    <GreyText>"weapon": "Legendary Sword",</GreyText></TextRow>
                </TextRow>
                <TextRow>
                  <TextRow>
                    <GreyText>"armor": "Epic Plate Armor",</GreyText></TextRow>
                </TextRow>
                <TextRow>
                  <TextRow>
                    <GreyText>"pet": "Fire Dragon",</GreyText></TextRow>
                </TextRow>
                <TextRow>
                  <GreyText>&#125;</GreyText>
                </TextRow>
                <PlayerMetadata>&#125;</PlayerMetadata>
              </Metadata>
            </AvatarModal>
          </Avatar>
        </Row>
        <LeftBackground src={map.src} alt="Map" />
      </Avatars>
    </Container>
  )
}

export default GamingWeb;