import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <>
      <Nav>
        <ListItem>
          <StyledLink href={` / `}>Spotlight</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink href={`art-pieces`}>Art Pieces</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink href={`favorites`}>Favorites</StyledLink>
        </ListItem>
      </Nav>
    </>
  );
}

const Nav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const ListItem = styled.li`
  display: flex;
  border: 2px solid black;
  width: 33.3%;
  height: 3rem;
  text-align: center;
  background-color: gray;
`;

const StyledLink = styled(Link)`
  width: 100%;
  color: black;
  text-decoration: none;
  align-self: center;
`;
