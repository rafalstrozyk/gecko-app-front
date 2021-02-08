import { useState, useEffect } from 'react';
import { Typography, Button, Paper } from '@material-ui/core';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addToEatingArray } from 'redux/actions/geckoActions';
import { isInArray } from 'functions/functions';

const StyledListItem = styled.div`
  .flexbox {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ isOnList }) => isOnList && 'red'};

    & > *:first-child {
      margin-left: 20px;
    }
    & > *:last-child {
      margin-right: 20px;
    }
  }
  & :hover {
    background-color: ${({ isOnList }) => (isOnList ? 'red' : '#eee')};
  }
`;

const ListItem = ({ data, style, addToEatingArray, eatingList }) => {
  const [isOnList, setIsOnList] = useState(false);

  useEffect(() => {
    setIsOnList(isInArray(eatingList, data._id));
  }, [eatingList, data._id]);

  function handleClick() {
    addToEatingArray(data._id);
    setIsOnList(!isOnList);
  }

  return (
    <StyledListItem isOnList={isOnList} style={style}>
      <Paper className="flexbox">
        <Typography variant="body2">Name: {data.name ? data.name : '-'}</Typography>
        <Button color="primary" onClick={handleClick}>
          Add
        </Button>
      </Paper>
    </StyledListItem>
  );
};

const mapStateToProps = (state) => {
  return {
    eatingList: state.geckos.geckos_id_eating_list,
  };
};

export default connect(mapStateToProps, { addToEatingArray })(ListItem);
