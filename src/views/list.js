import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import List from 'components/lists/list';

const StyledListSite = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .title {
    margin-bottom: 20px;
  }
  .container {
    display: flex;
    justify-content: center;
  }
`;

const ListSite = ({ data }) => {
  return (
    <StyledListSite>
      <Typography className="title" variant="h2">
        Crested Geckos List
      </Typography>
      <div className="container">
        <List width={'1200px'} height={'75vh'} data={data} />
      </div>
    </StyledListSite>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.geckos.data,
  };
};

export default connect(mapStateToProps)(ListSite);
