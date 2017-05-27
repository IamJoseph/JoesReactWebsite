import styled from 'styled-components';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default styled(CSSTransitionGroup)`
  background: linear-gradient(to bottom, #fffef6 50%,#edebe1 90%, #edebe1 100%);
  border: 1.5px solid #9fb4c6;
  box-shadow: 0px 0px 7px 0px #a2a2a2;
  display: flex;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  margin-left: 25px;
  margin-right: 25px;
  max-width: 1460px;
  width: 100%;
`;
