import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Navbar from 'components/navbar';
import { connect } from 'react-redux';
import { getGeckos, getEating } from 'redux/actions/geckoActions';
import AfterTemplate from 'template/afterTemplat';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const MainTemplate = ({ children, getGeckos, getEating }) => {
  useEffect(() => {
    getGeckos();
    getEating();
    setInterval(() => {
      getGeckos();
      getEating();
    }, 50000);
  }, [getGeckos, getEating]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AfterTemplate />
        <StyledContainer>{children}</StyledContainer>
      </BrowserRouter>
    </>
  );
};

export default connect(null, { getGeckos, getEating })(MainTemplate);
