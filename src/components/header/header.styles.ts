import styled from "styled-components";
import {Link} from "react-router-dom";

export const HeaderContainer = styled.nav`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
`

export const SpacedButton = styled(Link)`
  background-color: darkblue;
  color: white;
  border-radius: 3rem;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  margin: 0 1rem;
`
