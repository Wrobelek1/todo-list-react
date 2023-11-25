import { Link } from "react-router-dom/cjs/react-router-dom";
import styled, { css } from "styled-components";


export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  padding: 0px;

  ${({ $toggledone }) =>
    $toggledone &&
    css`
      background-color: ${({theme}) => theme.color.forestGreen};

      &:hover {
        filter: brightness(120%);
      }
      &:active {
        filter: brightness(140%);
      }
    `};
  ${({ $deleteTask }) =>
    $deleteTask &&
    css`
      background-color: red;

      &:hover {
        filter: brightness(120%);
      }
      &:active {
        filter: brightness(140%);
      }
    `};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  
`
