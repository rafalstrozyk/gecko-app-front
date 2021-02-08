import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { getGecko } from 'redux/actions/geckoActions';

const Gecko = ({ gecko, geckos, getGecko }) => {
  const { id } = useParams();
  useEffect(() => {
    getGecko(id);
  }, [geckos, id, getGecko]);

  return (
    <>
      {gecko ? (
        <div>
          <Typography variant="h4">Name: {gecko.name}</Typography>
          <Typography variant="body1">ID: {gecko._id}</Typography>
          <Typography variant="body1">Morph: {gecko.morph}</Typography>
          <Typography variant="body1">Birth date: {gecko.birth_date}</Typography>
          <Typography variant="body1">Buy date: {gecko.buy_date}</Typography>
          <Typography variant="body1">Last eating date: {gecko.eating}</Typography>
        </div>
      ) : (
        <div>
          <p>{id}</p>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return { gecko: state.geckos.gecko, geckos: state.geckos.data };
};

export default connect(mapStateToProps, { getGecko })(Gecko);
