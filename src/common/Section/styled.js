import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 10px 0;
  background-color: white;
  box-shadow: 0 0 5px ${({theme}) => theme.color.alto};
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0;
  border-bottom: 1px solid ${({theme}) => theme.color.silver};
`;

export const Header = styled.h2`
  align-self: center;
  
  margin: 0;
`;

export const Body = styled.div`
  padding: 20px;
`;
