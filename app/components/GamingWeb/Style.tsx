import styled from "styled-components";

export const Container = styled.div<{isMobile: boolean}>`
  position: relative;
  padding: ${props=>props.isMobile ? "80px 16px 0px" : "80px 116px 0px"};
  display: flex;
  align-items: center;
  justify-content: ${props=>props.isMobile ? "center" : "space-between"};
  gap: 56px;
  padding-bottom: 300px;
  overflow: hidden;
  flex-wrap: wrap;
`
export const TextGroup = styled.div<{isMobile: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: ${props=>props.isMobile? "auto" : "30%"};
`

export const Title = styled.p<{isMobile: boolean}>`
  color: var(--text-main, #F0F0F0);
  font-family: Integral CF;
  font-size: ${props=>props.isMobile ? "32px" : "40px"};
  font-style: normal;
  font-weight: 400;
  line-height: ${props=>props.isMobile ? "32px" : "48px"};
  text-transform: uppercase;
  margin: 0;
`
export const Description = styled.p`
  color: var(--text-secondary, #CACACE);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px; /* 142.857% */
  margin: 0;
`
export const Avatars = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 24px;
  position: relative;
`
export const Row = styled.div<{isMobile: boolean}>`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: ${props=>props.isMobile? "center" : "space-between"}
`
export const AvatarModal = styled.div<{isMobile: boolean}>`
  position: absolute;
  z-index: 16;
  display: none;
  flex-direction: column;
  width: ${props=> props.isMobile ? "auto" : "624px"};
  padding: 16px 24px;
  border-radius: 16px;
  border: 1px solid #343434;
  background: rgba(9, 9, 9, 0.80);
  backdrop-filter: blur(10px);
  gap: 24px;
`
// export const AvatarModalGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 624px;
//   padding: 16px 24px;
//   border-radius: 16px;
//   border: 1px solid #343434;
//   background: rgba(9, 9, 9, 0.80);
//   backdrop-filter: blur(10px);
//   gap: 24px;
// `
export const AvatarImage = styled.img`
  width: 68.418px;
  height: 68.418px;
  flex-shrink: 0;
  border-radius: 100px;
`
export const AvatarRed = styled.div`
  border-radius: 55px;
  border: 1px solid rgba(235, 58, 74, 0.50);
  background: rgba(235, 58, 74, 0.10);
  backdrop-filter: blur(10px);
  width: 284px;
  height: 80px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding-left: 5px;
  gap: 12px;
  z-index: 2;
`
export const Avatar = styled.div<{isHover: boolean, isRight: boolean, isMobile: boolean}>`
  filter: ${props => props.isHover ? "blur(10px)" : "blur(0px)"};
  border-radius: 55px;
  border: 1px solid rgba(52, 52, 52, 0.50);
  background: #080808;
  backdrop-filter: blur(10px);
  width: 284px;
  height: 80px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding-left: 5px;
  gap: 12px;
  z-index: 2;
  position: relative;

  &:hover{
    z-index: 3;
    backdrop-filter: blur(10px);
    filter: blur(0px);
  }

  &:hover ${Avatars} {
    filter: blur(10px);
  }

  &:hover ${AvatarRed} {
    margin-left: ${props => (props.isRight && !props.isMobile) ? "314px" : "0px"};
  }

  &:hover ${AvatarModal} {
    display: flex;
    top: -16px;
    left: ${props => props.isMobile ? "-70px" : (props.isRight ? "-341px" : "-24px")};
    right: ${props=> props.isMobile? "-70px" : "auto"};
    align-items: ${props=>props.isMobile ? "center" : "flex-start"};
  }
`
export const AvatarName = styled.p`
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
  background: linear-gradient(90deg, #2D2D2D 0%, #ABABAB 102.73%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const LeftBackground = styled.img`
  position: absolute;
  left: 0;
  bottom: -80%;
  width: 1395.402px;
  height: 784.77px;
  transform: rotate(-12deg);
  flex-shrink: 0;
  opacity: 0.5;
`
export const AvatarRedName = styled.p`
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
  color: #EB3A4A;
`
export const Metadata = styled.div`

`
export const PlayerMetadata = styled.p`
  color: #F0F0F0;
  font-family: Roboto Mono;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  margin: 0;
`
export const TextRow = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`
export const GreyText = styled.p`
  color: #95959D;
  font-family: Roboto Mono;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
`
export const RedText = styled.p`
  color: #EB3A4A;
  font-family: Roboto Mono;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
`