import styled from 'styled-components';

export const Container = styled.footer`
  align-items: center;
  bottom: 0;
  display: flex;
  height: 15px;
  justify-content: center;
  pointer-events: none;
  position: fixed;
  width: 100%;
  @media(min-width: 768px){
    height: 35px;
  }
`;

export const InnerContainer = styled.div`
  align-items: center;
  display: flex;
  height: 35px;
  justify-content: flex-end;
  margin-left: 25px;
  margin-right: 25px;
  max-width: 1460px;
  pointer-events: none;
  width: 100%;
`;

export const Email = styled.div`
  background-color: rgba(238, 236, 226, .5);
  color: #686664;
  font-size: .7em;
  margin-right: 2em;
`;
