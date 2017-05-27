import styled from 'styled-components';

export const ImgContainer = styled.div`
  cursor: pointer;
  margin: 2em 0;
  position: relative;
  &.clicked{
    background-color: #fff;
    bottom: 0;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    margin: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    img{
      margin-top: 85px;
      max-height: calc(100% - 85px);
      max-width: 90%;
      width: auto;
      &:nth-child(2){
        display: none;
      }
    }
  }
`;

export const AWrapper = styled.div`
  line-height: normal;
  margin: 1.5em 0;
  a {
    color: #6d8da7;
  }
`;

export const IMG = styled.img`
  max-width: 41.9em;
  width: 100%;
`;

export const ImgSmall = styled.img`
  max-width: 5em;
  position: absolute;
  top: -40px;
  right: -40px;
  width: 100%;
`;

export const ExtraText = styled.div`
  font-size: .9em;
  line-height: 2.2em;
`;
