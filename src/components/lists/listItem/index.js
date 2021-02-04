import { Typography, Button, Paper } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import { getGecko } from 'redux/actions/geckoActions';

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
      margin-left: 20px;
    }
  }
  & :hover {
    background-color: #eee;
  }
`;

const ListItem = ({ data, style, getGecko }) => {
  const history = useHistory();

  function handleClick() {
    getGecko(data._id);
    history.push(`/list/${data._id}`);
  }

  return (
    <StyledListItem style={style}>
      <Paper className="flexbox">
        <Typography variant="body2">id: {data._id ? data._id : '-'}</Typography>
        <Typography variant="body2">Name: {data.name ? data.name : '-'}</Typography>
        <Typography variant="body2">Weight: {data.weight ? data.weight : '-'}</Typography>
        <Typography variant="body2">
          Eating: {data.eating ? format(new Date(data.eating), 'yyyy-MM-dd') : '-'}
        </Typography>
        <Button color="primary" onClick={handleClick}>
          Details
        </Button>
      </Paper>
    </StyledListItem>
  );
};

export default connect(null, { getGecko })(ListItem);
