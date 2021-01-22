import styled from 'styled-components';

const StyledGaleryItem = styled.div`
  display: block;
  width: 20%;
  height: 0;
  padding: 0;
  padding-bottom: 15%;
  transition: all 0.1s;
  cursor: pointer;
  background: ${(props) => `url(${props.img}) no-repeat`};
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
  :hover {
    transform: scale(2);
    z-index: 2;
  }

  div {
    position: absolute;
    width: 100%;
    background-color: rgba(59, 59, 59, 0.8);
    top: 80%;
    left: 0;
    text-align: center;
    padding: 4px;
  }

  p {
    z-index: 5;
    color: #eee;
  }
`;

const GaleryItem = ({ bgImg, name, onClick }) => (
  <StyledGaleryItem onClick={onClick} img={bgImg}>
    <div>
      <p>{name}</p>
    </div>
  </StyledGaleryItem>
);

export default GaleryItem;
