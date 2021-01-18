import { Typography, Button, Paper } from '@material-ui/core';
import styled from 'styled-components';

const StyledListItem = styled.div`
  .flexbox {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    & > *:not(last-child) {
      margin-right: 10%;
    }
  }
  & :hover {
    background-color: #eee;
  }
`;

const ListItem = ({ data, style }) => (
  <StyledListItem style={style}>
    <Paper className="flexbox">
      <Typography variant="body1">ID: {data.id}</Typography>
      <Typography variant="body1">Name: {data.name}</Typography>
      <Typography variant="body1">Weight: {data.weight}</Typography>
      <Typography variant="body1">Eating: {data.eatingDate}</Typography>
      <Button color="primary">Settings</Button>
    </Paper>
  </StyledListItem>
);

export default ListItem;
