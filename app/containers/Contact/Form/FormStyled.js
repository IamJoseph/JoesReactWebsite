import styled, { keyframes } from 'styled-components';

/*
 * Form Elements
 */

export const Form = styled.form`
  background: linear-gradient(to bottom, #fffef6 50%,#edebe1 90%, #edebe1 100%);
  box-shadow: 0px 5px 9px -2px #ab9393;
  display: flex;
  flex-direction: column;
  margin: 0 auto 20px auto;
  max-width: 800px;
  padding: 1em;
  width: 100%;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
`;

export const FieldSet = styled.fieldset`
  border-radius: 3px;
  margin: .25em 2px;
  width: ${({ halfWidth }) => halfWidth ? '50%' : '100%'};
`;

export const TextArea = styled.textarea`
  border: none;
  width: 100%;
`;

export const SubmitButton = styled.button`
  align-self: flex-end;;
  background-color: #81a5c3;
  border: none;
  border-bottom: 1.5px solid #6c8499;
  border-top: 1.5px solid #8fb3d1;
  border-radius: 10px;
  color: #fffef6;
  display: flex;
  justify-content: center;
  height: 3.343em;
  outline: none;
  width: 6em;
  &.loading, &:focus{
    background-color: #b7c8d2;
    border-bottom: 1.5px solid #b7c8d2;
    border-top: 1.5px solid #b7c8d2;
  }
`;

/*
 * Spinner
 */

const colors = keyframes`
 0% { stroke: #4285F4; }
 25% { stroke: #DE3E35; }
 50% { stroke: #F7C223; }
 75% { stroke: #1B9A59; }
 100% { stroke: #4285F4; }
`;

const dash = keyframes`
 0% { stroke-dashoffset: 187; }
 50% {
   stroke-dashoffset: 46.75;
   transform:rotate(135deg);
 }
 100% {
   stroke-dashoffset: 187;
   transform:rotate(450deg);
 }
`;

const rotator = keyframes`
 0% { transform: rotate(0deg); }
 100% { transform: rotate(270deg); }
`;

export const Spinner = styled.svg`
 animation: ${rotator} 1.4s linear infinite;
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;
 height: 100%;
`;

export const Circle = styled.circle`
 stroke-dasharray: 187;
 stroke-dashoffset: 0;
 transform-origin: center;
 animation: ${dash} 1.4s ease-in-out infinite, ${colors} 5.6s ease-in-out infinite;
`;
