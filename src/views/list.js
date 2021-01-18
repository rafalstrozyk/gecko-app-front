import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import { data } from 'data/data';
import ListTest from 'components/lists/list';

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

const ListSite = () => {
  return (
    <StyledListSite>
      <Typography className="title" variant="h2">
        Crested Geckos List
      </Typography>
      <div className="container">
        <ListTest width={'1000px'} height={'75vh'} data={data.data} />
      </div>
    </StyledListSite>
  );
};

export default ListSite;
