import styled from 'styled-components';

export const Container = styled.section`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  font-size: 1.35em;
  justify-content: flex-start;
  margin-top: 70px;
  width: 100%;
  @media(orientation: landscape){
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
  }
  @media(min-width: 768px){
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const H1 = styled.h1`
  color: #e9de63;
  font-size: 2.2em;
  margin: 0;
`;

/*
 * Text Styles
 */

export const Text = styled.div`
 background-color: rgba(255, 254, 246, .95);
 border-radius: 5px;
 font-size: .8em;
 lineHeight: 1.5;
 margin-left: 2em;
 margin-right: 2em;
 margin-top: ${(props) => (props.right ? '1em' : '4em')};
 padding: 1em;
 user-select: none;
 width: 18em;
 word-wrap: break-word;
 z-index: 2;
 @media(orientation: landscape){
   margin-top: ${(props) => (props.right ? 0 : '-3em')};
 }
 @media(min-width: 375px){
   font-size: .9em;
 }
 @media(min-width: 414px) and (orientation: portrait), (min-width: 700px){
   font-size: 1em;
 }
 @media(min-width: 768px){
   border: 1px solid #686664;
   width: 9em;
   @media(orientation: portrait){
     margin-top: 0;
   }
 }
 @media(min-width: 1150px){
   width: 13em;
 }
 @media(min-width: 1400px){
   background-color: transparent;
   border: none;
   margin-left: 0;
   margin-right: 0;
   margin-top: ${(props) => (props.right ? 0 : '-5em')};
   padding: 1.87em;
   width: ${(props) => (props.right ? '20em' : '23em')};
 }
`;
