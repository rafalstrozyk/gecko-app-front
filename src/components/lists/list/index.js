import React, { useRef } from 'react';
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import ListItem from 'components/lists/listItem';
import EatingListItem from 'components/lists/eatingListItem';

const CustomList = ({ width, height, data, itemType }) => {
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 48,
      fixedHeight: true,
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
                    {!itemType && <ListItem style={style} data={item} />}
                    {itemType === 'eating' ? <EatingListItem style={style} data={item} /> : null}
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
