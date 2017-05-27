import styled from 'styled-components';

export const ImgContainer = styled.div`
  max-width: 655px;
  &.clicked{
    background-color: #fff;
    bottom: 0;
    height: 100%;
    left: 0;
    margin: 0;
    max-width: 100%;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
    width: 100%;
    img{
      margin-top: 80px;
      max-height: calc(100% - 80px);
      max-width: 100%;
    }
  }
`;

export const IMG = styled.img`
  cursor: pointer;
  margin-top: 2.5em;
  max-width: 100%;
`;
