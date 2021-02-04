import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from 'components/navbar';
import { connect } from 'react-redux';
import { getGeckos } from 'redux/actions/geckoActions';
import AfterTemplate from 'template/afterTemplat';
import AddGeckoForm from 'components/forms/addGecko';

const MainTemplate = ({ children, getGeckos }) => {
  useEffect(() => {
    getGeckos();
    setInterval(() => {
      getGeckos();
    }, 50000);
  }, [getGeckos]);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AfterTemplate>
          <AddGeckoForm />
        </AfterTemplate>
        {children}
      </BrowserRouter>
    </>
  );
};

export default connect(null, { getGeckos })(MainTemplate);
