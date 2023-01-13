import { combineReducers } from 'redux';

import counter from './ducks/counter';
import items from './ducks/items';

export default combineReducers({
  counter,
  items,
});
