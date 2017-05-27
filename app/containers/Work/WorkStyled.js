import styled from 'styled-components';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export const Container = styled.section`
background-color: #e4e2d7;
border: 1.5px solid #c2cdd6;
display: flex;
height: 100%;
justify-content: center;
margin-left: 25px;
margin-right: 25px;
max-width: 1460px;
padding: 0 .5em;
width: 100%;
z-index: 1;
@media(min-width: 768px){
  padding: 0 1em;
}
@media(min-width: 1150px){
  padding: 0 1.87em;
}
`;

export const PageContainer = styled(CSSTransitionGroup)`
  background: linear-gradient(to bottom, #f9f9f1 50%,#edebe1 90%, #edebe1 100%);
  border: 1.5px solid #9fb4c6;
  border-radius: 0 5px 5px 5px;
  box-shadow: 2px 2px 5px #bdbcb5;
  display: flex;
  flex: 8;
  height: 85%;
  justify-content: center;
  margin-top: 85px;
  max-height: calc(100% - 100px);
  overflow-y: auto;
  padding: 1em;
`;
