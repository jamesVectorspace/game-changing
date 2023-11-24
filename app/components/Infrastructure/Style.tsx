// use client
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
`
export const LeftImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
export const Structure = styled.div<{isMobile: boolean}>`
  display: flex;
  align-items: center;
  margin: ${props => props.isMobile ? "33px 16px" : "33px 116px"};
  justify-content: ${(props) => props.isMobile ? "center": "space-between"};
  width: 100%;
  gap: 51px;
  margin-bottom: 100px;
  flex-wrap: wrap;

`
export const JoinDiscord = styled.div<{isMobile: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 2;
  width: ${props => props.isMobile ? "auto" : "600px"};
`
export const Header = styled.p`
  color: #EB3A4A;
  font-family: Lexend;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`
export const Frame = styled.div`

`
export const Title = styled.p<{isMobile: boolean}>`
  color: #E4E4E7;
  font-family: Integral CF;
  font-size: ${props => props.isMobile ? "32px" : "64px"};
  font-style: normal;
  font-weight: 400;
  line-height: ${props=>props.isMobile ? "32px" : "64px"};
  text-transform: uppercase;
  margin: 0;
`
export const Description = styled.p`
  color: #CACACE;
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px; /* 142.857% */
`
export const JoinButton = styled.button`
  display: flex;
  width: 180px;
  height: 56px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #EB3A4A;
  border: none;
`
export const JoinText = styled.p`
  color: #E4E4E6;
  text-align: center;
  font-family: Lexend;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
`
export const RightGroup = styled.div<{isMobile: boolean}>`
  width: 60%;
  height: 592.501px;
  flex-shrink: 0;
  position: relative;
  gap: 37px;
  width: ${props => props.isMobile ? "auto" : "600px"};
`
export const AvatarGroup = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 50%;
  transform: translate(-50%, 0px);
  align-items: center;
  gap: 37px;
`
export const RightImage = styled.img`
  position: absolute;
  top: 0;
  right: 116px;
  width: 870px;
  left: 50%;
  transform: translate(-50%, 0px);
`
export const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Avatar = styled.img`
  width: 104.632px;
  height: 104.632px;
  border-radius: 100px;
`
export const Idlabel = styled.p`
  color: #FFF;
  font-family: Lexend;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.031px; /* 160.314% */
  margin: 0px;
`
export const Id = styled.p`
  color: #FFF;
  text-align: center;
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.031px; /* 114.51% */
  margin: 0px;
`
export const LockSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`
export const LockImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 100px;
`
export const Launchpad = styled.div<{isMobile: boolean}>`
  border-radius: 360px;
  border: 1px solid rgba(52, 52, 52, 0.50);
  background: #080808;
  backdrop-filter: blur(10px);
  padding: 15px;
  font-size: ${props=> props.isMobile ? "12px" : "16px"}
`
export const LaunchpadText = styled.p`
  background: linear-gradient(90deg, #ABABAB 0%, #2D2D2D 102.73%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0px;
  text-align: center;
  text-wrap: nowrap;
`
export const LaunchpadGroup = styled.div`
  display: flex;
  gap: 10px;
`
export const ScrollDown = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0px);
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ScrollDownText = styled.div`
  color: #2B2B2B;
  text-align: center;
  font-family: Lexend;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  background: radial-gradient(#EB3A4A, #EB3A4A00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const ScrollDownIcon = styled.img`

`