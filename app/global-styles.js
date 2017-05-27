import { injectGlobal } from 'styled-components';
import starBackground from './assets/stary_night.png';
/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    position: fixed;
    width: 100%;
  }

  body {
    font-family: monospace;
  }

  body.fontLoaded {
    font-family: 'Roboto Mono', monospace;
    nav, h2, text{
      font-family: 'Coda', sans-serif;
    }
  }

  #app {
    background-color: #dcdbd6;
    font-size: .65em;
    height: 100%;
    width: 100%;
    @media(min-width: 768px){
      font-size: .9em;
    }
    @media(min-width: 1000px){
      font-size: 1em;
    }
  }

  .globalContainer {
    display: flex;
    height: 100%;
    justify-content: center;
    overflow: hidden;
    position: fixed;
    width: 100%;
    &:before{
      background: url(${starBackground});
      background-size: cover;
      content: '';
      height: 100%;
      pointer-events: none;
      position: absolute;
      width: 100%;
      z-index: 1;
    }
  }

  .page-enter, .page-appear {
    opacity: 0.01;
    &.astronaut{
      opacity: 0.01;
      transform: translateY(20em);
    }
    .textTransform{
      transform: translateX(78em);
      @media(min-width: 768px){
        transform: translateX(-78em);
      }
    }
    .pupils{
      transform: translateX(1px);
      @media(min-width: 768px){
        transform: translateX(-1px);
      }
    }
    #eyeClipPath{
      transform: translateX(-1px);
      @media(min-width: 768px){
        transform: translateX(1px);
      }
    }
  }

  .page-enter.page-enter-active, .page-appear.page-appear-active {
    opacity: 1;
    transition: opacity 600ms ease-out;
    &.astronaut{
      opacity: 1;
      transform: none;
      transition: all 600ms linear;
    }
    .textTransform{
      transform: none;
      transition: transform 500ms ease-in 600ms;
    }
    .pupils, #eyeClipPath{
      transform: none;
      transition: transform 500ms ease-in 675ms;
    }
  }

  #starlight {
    opacity: .6;
    animation:  animStar 25s linear infinite;
  }

  @keyframes animStar{
    0% {
      transform: translate(0px, 0px);
    }
    100% {
      transform: translate(-90px, 10px);
    }
  }
`;
