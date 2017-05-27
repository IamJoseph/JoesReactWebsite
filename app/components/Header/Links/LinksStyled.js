import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  height: 68px;
  margin-right: 1.87em;
  z-index: 1;
  @media(min-width: 1024px){
    margin-right: 3.2em;
  }
`;

 /*
  * CollapsibleMenu
  */

export const Menu = styled.div`
  @media(min-width: 700px){
    display: none;
  }
`;

export const MenuLink = styled(NavLink)`
  background-color: #6d8da7;
  color: #fffef6;
  padding: 1em;
  text-decoration: none;
  z-index: 1;
`;

export const UL = styled.ul`
  border-left: 1px solid #627d93;
  border-right: 1px solid #627d93;
  border-bottom: 2px solid #627d93;
  border-radius: 0 0 3px 3px;
  display: flex;
  flex-direction: column;
  font-size: 1.25em;
  margin-top: 0;
  opacity: 1;
  padding-left: 0;
  position: relative;
  transform: none;
  transition: opacity .1s ease-out .15s, transform .3s linear, z-index 0s linear .4s;
  will-change: transform;
  z-index: 1;
  &.hide{
    opacity: 0;
    transition: opacity .15s ease-in, transform .3s linear, z-index linear;
    transform: translateY(-12em);
    z-index: -9;
  }
`;

export const Button = styled.div`
  align-items: center;
  background-color: #6d8da7;
  border-bottom: 2px solid #627d93;
  display: flex;
  height: 70px;
  justify-content: center;
  width: 120px;
`;

export const IMG = styled.img`
  display: flex;
  height: 30px;
  margin: auto;
`;

 /*
  * Links
  */

export const Link = styled(NavLink)`
  align-items: center;
  align-self: center;
  border-radius: 10px 10px 0 0;
  color: #fffef6;
  cursor: pointer;
  display: none;
  font-size: 1.4em;
  font-weight: 300;
  height: 100%;
  margin-top: 2px;
  outline: 0;
  padding: 0 .7em;
  user-select: none;
  text-decoration: none;
  &.active{
    background-color: #fffef6;
    border-bottom: 2px solid #e3e2de;
    border-left: 1px solid #627d93;
    border-right: 2px solid #627d93;
    border-top: 1px solid #627d93;
    color: #5f5c5a;
  }
  @media(min-width: 700px){
    display: inline-flex;
  }
`;
