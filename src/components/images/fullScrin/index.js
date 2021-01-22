import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const StyledTransition = styled.div`
  .transition-enter {
    opacity: 0;
  }
  .transition-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .transition-exit {
    opacity: 1;
  }
  .transition-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

const StyledFullScrin = styled.div`
  background-color: rgba(59, 59, 59, 0.7);
  height: 100%;
  width: 100%;
  position: fixed;
  cursor: pointer;
  top: 0;
  left: 0;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    max-width: 1200px;
    width: 60vw;
  }
  img {
    display: block;
    width: 100%;
  }
`;

const FullScrin = ({ img, onClick, isFullScrin }) => (
  <StyledTransition>
    <CSSTransition in={isFullScrin} timeout={200} unmountOnExit classNames="transition">
      <StyledFullScrin onClick={onClick}>
        <div>
          <img src={img} alt="full screen" />
        </div>
      </StyledFullScrin>
    </CSSTransition>
  </StyledTransition>
);

export default FullScrin;
