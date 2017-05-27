import styled from 'styled-components';
import nasa from '../../../../assets/nasa.jpg';

export const H2 = styled.h2`
  background: -webkit-linear-gradient(transparent, transparent), url(${nasa});
  background-size: contain;
  color: #686664;
  font-family: sans-serif;
  font-size: 1.9em;
  letter-spacing: 1px;
  line-height: normal;
  margin-bottom: 0;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px;
  word-break: break-word;
  @media(min-width: 768px){
    font-size: 2.5em;
    flex: 1 100%;
  }
  span{
    -webkit-text-fill-color: currentColor;
    -webkit-text-stroke-width: 0;
  }
`;

export const UL = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  line-height: 2.5em;
  list-style: none;
  max-width: 100%;
  padding: 0;
  @media(min-width: 768px){
    flex-direction: row;
    justify-content: center;
  }
`;

export const Div = styled.div`
  padding: 2em 1em;
  @media(min-width: 768px){
    flex: 1 50%;
    order: 3;
  }
`;

export const I = styled.i`
  line-height: normal;
  margin-bottom: 3em;
  text-align: center;
  @media(min-width: 768px){
    flex: 1 100%;
    order: 2;
  }
`;

export const ImgContainer = styled.div`
  max-width: 100%;
  @media(min-width: 768px){
    flex: 1 50%;
    margin-top: 3em;
    max-width: 50%;
  }
  &.clicked{
    background-color: #fff;
    bottom: 0;
    height: 100%;
    left: 0;
    margin: 0;
    max-width: 100%;
    overflow-y: auto;
    padding: 0 25px;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
    width: 100%;
    img{
      margin-top: 80px;
      max-width: 1460px;
      width: 100%;
    }
  }
`;

export const IMG = styled.img`
  box-shadow: 0px 12px 12px -10px #3a3a3a;
  cursor: pointer;
  max-width: 100%;
  @media(min-width: 768px){
    max-width: 95%;
  }
`;

export const VideoContainer = styled.div`
  max-height: 550px;
  max-width: 80%;
  text-align: center;
  @media(min-width: 768px){
    flex: 1 50%;
    height: 380px;
    margin-top: 3em;
    max-width: 50%;
    order: 2;
  }
  @media(min-width: 1000px){
    height: 550px;
  }
  &.clicked{
    background-color: #fff;
    bottom: 0;
    height: 100%;
    left: 0;
    margin: 0;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
    width: 100%;
    video{
      margin-top: 80px;
      max-height: calc(100% - 80px);
      max-width: 1460px;
      padding: 0 25px;
      width: 100%;
    }
  }
`;

export const Video = styled.video`
  border-radius: 3px;
  box-shadow: 0px 12px 12px -10px #3a3a3a;
  cursor: pointer;
  max-height: 550px;
  max-width: 100%;
`;
