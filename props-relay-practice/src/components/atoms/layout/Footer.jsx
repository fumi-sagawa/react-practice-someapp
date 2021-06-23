import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2021 fumi Inc.</SFooter>;
};

const SFooter = styled.header`
  display: grid;
  justify-content: center;
  background-color: #11999e;
  color: #fff;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
