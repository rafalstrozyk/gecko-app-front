import { useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import FullScrin from 'components/images/fullScrin';
import GaleryItem from 'components/images/galeryItem';

const StyledGalery = styled.div`
  width: 100%;
  margin: 0 auto;
  .title {
    margin-bottom: 20px;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    & > * {
      margin: 5px;
    }
  }
`;

const Galery = ({ images, title }) => {
  const [isFullScrin, setIsFullScrin] = useState(false);
  const [fullScrinImg, setFullScrinImg] = useState(null);
  const fullScrinHandler = (img) => {
    setIsFullScrin(!isFullScrin);
    setFullScrinImg(img);
  };

  return (
    <StyledGalery>
      <Typography variant="h3" className="title">
        {title}
      </Typography>

      <FullScrin
        isFullScrin={isFullScrin}
        onClick={() => setIsFullScrin(false)}
        img={fullScrinImg}
      />

      <div className="container">
        {images.map((item, index) => (
          <GaleryItem
            onClick={() => fullScrinHandler(item.img)}
            bgImg={item.img}
            name={item.name}
            key={index}
          />
        ))}
      </div>
    </StyledGalery>
  );
};

export default Galery;
