import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from 'components/navbar';
import { connect } from 'react-redux';
import { getGeckos } from 'redux/actions/gecko';

const MainTemplate = ({ children, getGeckos }) => {

  useEffect(() => {
    getGeckos();
    setInterval(() => {
      getGeckos();
    }, 20000);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {children}
      </BrowserRouter>
    </>
  );
};

export default connect(null, { getGeckos })(MainTemplate);
