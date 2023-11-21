import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  font-size: 18px;
  color: #008080;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    filter: brightness(110%);
  }
  &:disabled {
    color: ${({theme}) => theme.color.silver}
  }
`;
