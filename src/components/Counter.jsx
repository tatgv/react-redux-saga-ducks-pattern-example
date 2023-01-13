import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/ducks/counter';

function Counter() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(actions.increment);
  };

  const handleDecrement = () => {
    dispatch(actions.decrement);
  };
  return (
    <div>
      <p>
        Count:
        {' '}
        {count}
      </p>
      <button onClick={handleIncrement} type="button">Increment</button>
      <button onClick={handleDecrement} type="button">Decrement</button>
    </div>
  );
}

export default Counter;
