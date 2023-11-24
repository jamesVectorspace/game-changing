import styled from "styled-components";

export const Container = styled.div<{isMobile: boolean}>`
    margin: ${props=> props.isMobile ? "120px 16px 80px" : "120px 321px 80px"};
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 56px;
`

export const HeaderGroup = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 24px;
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
  text-transform: uppercase;
`
export const SubTitle = styled.p`
  color: #CACACE;
  text-align: center;
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  margin: 0px;
  line-height: 20px; /* 142.857% */
`
export const ContentGroup = styled.div<{isMobile: boolean}>`
  display: flex;
  gap: 50px;
  flex-wrap: ${props=>props.isMobile?"wrap":"nowrap"};
  justify-content: ${props=>props.isMobile ? "center" : "space-around"}
`
export const Content = styled.div<{isMobile: boolean}>`
  display: inline-flex;
  height: 244px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 16px;
  border: 1px solid #343434;
  background: rgba(9, 9, 9, 0.80);
  backdrop-filter: blur(10px);
  width: ${props=>props.isMobile? "240px" : "387px"};
`

export const ContentTitle = styled.p`
  color: #E4E4E7;
  font-family: Lexend;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  text-wrap: nowrap;
`

export const ContentDescription = styled.p`
  color: var(--text-secondary, #CACACE);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px; /* 142.857% */
`

export const ContentImage = styled.img`
  width: 72px;
  flex-shrink: 0;
  margin-top: 30px;
`