import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledNav = styled.nav`
    display: flex;
    pudding: 0 20px;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 540px) {
      display: ${(props: { isOpen: boolean }) => (props.isOpen ? 'flex' : 'none')};
`;

const Link = styled.a`
  display: ${(props: { isVisible: boolean }) => (props.isVisible ? 'flex' : 'none')};
  border-radius: 12px;
  padding: 12px 20px;
  cursor: pointer;
`

export const FavouritesLink = styled(Link) <{
  isVisible?: boolean;
  isActive?: boolean;
}>`
  padding: 0 4px 0 0;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  align-items: center;
  color: #18E772;

  @media(max-width: 680px) {
    padding: 0;
  }
  
  ${(props) => {
    if (props.isActive) {
      return css`
      --border-width: 3px;

      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(67, 68, 69);
      border-radius: var(--border-width);

      &::after {
        position: absolute;
        content: "";
        top: calc(-1 * var(--border-width));
        left: calc(-1 * var(--border-width));
        z-index: -1;
        width: calc(100% + var(--border-width) * 2);
        height: calc(100% + var(--border-width) * 2);
        background: linear-gradient(
          60deg,
          hsl(224, 85%, 66%),
          hsl(269, 85%, 66%),
          hsl(314, 85%, 66%),
          hsl(359, 85%, 66%),
          hsl(44, 85%, 66%),
          hsl(89, 85%, 66%),
          hsl(134, 85%, 66%),
          hsl(179, 85%, 66%)
        );
        background-size: 300% 300%;
        background-position: 0 50%;
        border-radius: calc(2 * var(--border-width));
        animation: moveGradient 4s alternate infinite;
      }
    }

    @keyframes moveGradient {
      50% {
        background-position: 100% 50%;
      }
      `;
    }
  }}
`;

export const FavouritesTitle = styled.span`
  @media(max-width: 680px) {
    display: none;
  }

  @media(max-width: 540px) {
    display: block;
  }
`

export const GradientLink = styled(Link)`
  border-radius: 12px;
  padding: 12px 20px;
  cursor: pointer;
  color: var(--dark-text-color);
  background: rgb(23,233,107);
  background: -moz-linear-gradient(110deg, rgba(23,233,107,1) 0%, rgba(36,215,194,1) 100%);
  background: -webkit-linear-gradient(110deg, rgba(23,233,107,1) 0%, rgba(36,215,194,1) 100%);
  background: linear-gradient(110deg, rgba(23,233,107,1) 0%, rgba(36,215,194,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#17e96b",endColorstr="#24d7c2",GradientType=1);
`;

export const BorderLink = styled(Link)`
  border-radius: 12px;
  padding: 12px 20px;
  cursor: pointer;
  color: #20DCAA;
  border: 1px solid #20DCAA;
`;








export const HeaderBlock = styled.header`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0;
    margin: 0;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 600;
    line-height: 10px;
`;

export const StyledMenu = styled.ul`
    display: flex;
    margin: 0 auto
    margin: 20px 0;   
    padding: 0 12px;
    line-height: 1em; 
`;

export const OverlayLogin = styled.div`
    background-color: #ffffff; 
    padding: 2;
    margin: 0 15px;
    color: #000000;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 50px 20px -55px inset;
`;

export const StyledLogin = styled.li`
    display: flex;    
    margin: 8.5px 19px;
`;

export const MenuLi = styled.li`
    padding: 0 12px;
    line-height: 1em;
`;

export const ImgLogo = styled.img`
    margin-left: 30px;
    margin: 4px 0 4px 30px;
`;
