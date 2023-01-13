import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../redux/ducks/items';

function Items() {
  const { items, isLoaded } = useSelector(state => state.items);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getItems('some test id'));
  }, []);

  return (
    <div>
      {!isLoaded
        || (items
          && items.map(item => (
            <h2 key={item.id}>
              {item.first}
              {' '}
              {item.last}
            </h2>
          )))}
    </div>
  );
}

export default Items;
