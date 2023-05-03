import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: var(--footer-height);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: purple;
  box-shadow: 0 0 1rem #00000099;

  & > h4 {
    font-size: 1.25rem;
    text-align: center;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <h4>"Hold fast to dreams 
For if dreams die
Life is a broken-winged bird
That cannot fly.

Hold fast to dreams
For when dreams go
Life is a barren field
Frozen with snow." <em>-Langston Hughes</em></h4>
    </StyledFooter>
  );
}

export default Footer;