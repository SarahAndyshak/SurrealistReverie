import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: var(--footer-height);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: purple;

  & > h4 {
    font-size: 1.25rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <h4>footer placeholder</h4>
    </StyledFooter>
  );
}

export default Footer;