import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${({theme}) => theme.color.teal};
  color: white;
  border: none;
  transition: 0.3s;

  &:hover {
    filter: brightness(120%);
    transition: 0.3s;
  }

  &:active {
    filter: brightness(140%);
    border: 1px solid black;
    border-radius: 2px;
  }
`;
