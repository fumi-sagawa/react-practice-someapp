import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <Link to="/">HOME</Link>
      <Link to="/users">USER</Link>
    </SHeader>
  );
};

const SHeader = styled.header`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  column-gap: 8px;
  background-color: #11999e;
  color: #fff;
  padding: 8px 0;
`;
