import { Typography, Paper } from '@material-ui/core';

import styled from 'styled-components';

const StyledListItem = styled.div`
  .flexbox {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > *:first-child {
      margin-left: 20px;
    }
    & > *:last-child {
      margin-right: 20px;
    }
  }
  & :hover {
    background-color: #eee;
  }
`;

const EatingListItemTwo = ({ data, style }) => {
  return (
    <StyledListItem style={style}>
      <Paper className="flexbox">
        <Typography variant="body2">Eat type: {data.eat_type ? data.eat_type : '-'}</Typography>
        <Typography variant="body2">Date: {data.date_eating ? data.date_eating : '-'}</Typography>
      </Paper>
    </StyledListItem>
  );
};

export default EatingListItemTwo;
