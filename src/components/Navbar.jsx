import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <NavWrapper>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Food Recipe</Logo>
      </Nav>
      <div>
        <User>{isAuthenticated && user.name}</User>
        {isAuthenticated ? (
          <Button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </Button>
        ) : (
          <Button onClick={() => loginWithRedirect()}>Login</Button>
        )}
      </div>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

const User = styled.span`
  margin-right: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: rgb(56, 56, 56);
`;

const Button = styled.button`
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #f27121, #e94057);
    transition: 0.3s;
  }
`;

export default Navbar;
