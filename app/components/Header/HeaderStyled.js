import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 70px;
  justify-content: center;
  position: absolute;
  top: 10px;
  width: 100%;
  z-index: 10;
  @media(min-width: 768px){
    top: 10px;
  }
`;

export const NavBar = styled.div`
  align-items: center;
  background-color: #6d8da7;
  border-bottom: 2px solid #627d93;
  box-shadow: 0px 8px 15px -3px #949393;
  display: flex;
  justify-content: space-between;
  max-width: 1500px;
  position: relative;
  width: 100%;
  margin-left: 5px;
  margin-right: 5px;
`;

export const LeftRoof = styled.div`
  border-bottom: 17px solid transparent;
  border-right: 20px solid #627d93;
  bottom: -19px;
  height: 0;
  position: absolute;
  left: 0;
  width: 0;
`;

export const RightRoof = styled.div`
  border-bottom: 17px solid transparent;
  border-left: 20px solid #627d93;
  bottom: -19px;
  height: 0;
  position: absolute;
  right: 0;
  width: 0;
`;
