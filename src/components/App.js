import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import DreamInput from './DreamInput';
import DreamList from './DreamList';
import styled from 'styled-components';

const StyledApp = styled.main`
  background-color: #222;
  font-size: 20pt;
  color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: var(--actual-height);
  opacity: 0;
  scale: 1.5;
  rotate: 360deg;

  transition: opacity 500ms ease, scale 500ms ease, rotate 500ms ease;
`;

function App() {

  useEffect(() => {
    document.getElementsByTagName('main')[0].style.opacity = 1;
    document.getElementsByTagName('main')[0].style.scale = 1;
  });

  return (
    <StyledApp>
      <Header />
      <DreamInput />
      <DreamList />
      <Footer />
    </StyledApp>
  );
}

export default App;
