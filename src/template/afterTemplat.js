import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setAfterTemplateIsOpen } from 'redux/actions/uiActions';

const StyledAfterTemplate = styled.div`
  position: fixed;
  top: 52px;
  width: 100%;
  height: 100%;
  background-color: #636e72;
  z-index: 20;
  display: flex;
  justify-content: center;

  .content {
    margin-top: 20px;
    max-width: 1200px;
    width: 100%;
  }
`;

const AfterTemplate = ({ children, setAfterTemplateIsOpen, templateIsOpen }) => {
  const [isOpen, setIsOpen] = useState(templateIsOpen);

  useEffect(() => {
    setIsOpen(templateIsOpen);
  }, [templateIsOpen]);

  function handleIsOpen() {
    setAfterTemplateIsOpen(false);
  }

  return (
    <>
      {isOpen ? (
        <StyledAfterTemplate >
          <div className="content">
            <button onClick={handleIsOpen}>X</button>
            {children}
          </div>
        </StyledAfterTemplate>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    templateIsOpen: state.ui.afterTemplateOpen,
  };
};

export default connect(mapStateToProps, { setAfterTemplateIsOpen })(AfterTemplate);
