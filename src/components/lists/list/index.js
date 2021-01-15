import React, { useRef } from 'react';
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import ListItem from 'components/lists/listItem';

const CustomList = ({ width, height, data }) => {
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    }),
  );

  return (
    <div style={{ width: width, height: height }}>
      {data.length > 0 && (
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={cache.current.rowHeight}
              deferredMeasurementCache={cache.current}
              rowCount={data.length}
              rowRenderer={({ key, index, style, parent }) => {
                const item = data[index];
                return (
                  <CellMeasurer
                    key={key}
                    cache={cache.current}
                    parent={parent}
                    columnIndex={0}
                    rowIndex={index}
                  >
                    <div style={style}>
                      <ListItem data={item} />
                    </div>
                  </CellMeasurer>
                );
              }}
            />
          )}
        </AutoSizer>
      )}
    </div>
  );
};

export default CustomList;
