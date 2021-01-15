import React from 'react';

import { data } from 'data/data';
import ListTest from 'components/lists/list';

const ListSite = () => {

  return (
    <div>
      <h1>ListSite</h1>
      <ListTest width={'100%'} height={'80vh'} data={data.data} />

    </div>
  );
};

export default ListSite;
