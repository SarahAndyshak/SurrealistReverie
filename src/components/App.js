import Header from './Header';
import Footer from './Footer';
import { styled } from 'styled-components';

const StyledApp = styled.main`
  background-color: #222;
  color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: var(--actual-height)
`;

function App() {

  return (
    <StyledApp>
      <Header />
      This is the stuff between the header and footer
      <Footer />
    </StyledApp>
  );
}

export default App;
