import { Wrapper, HeaderContainer, Header, Body} from "./styled";

const Section = ({title, body, extraHeaderContent}) => (
    <Wrapper>
        <HeaderContainer>
        <Header>{title}</Header>
        {extraHeaderContent}
        </HeaderContainer>
        <Body>
            {body}
        </Body>    
    </Wrapper>
);

export default Section;