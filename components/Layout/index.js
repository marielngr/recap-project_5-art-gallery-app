import Navigation from "../Navigation";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Wrapper>
        <StyledMain>{children}</StyledMain>
        <Navigation />
      </Wrapper>
    </>
  );
}

const StyledMain = styled.main`
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  height: 100vh;
`;
