import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './Redux/BonusSlice';
import { RootState } from './Redux/store';

const Bonus = () => {
    const dispatch = useDispatch()
    const {bonus} = useSelector((state : RootState) => state.bonus)
  return (
    <div>
        {bonus} <br/>
      <button onClick={() => dispatch(increment())}>Increase bonus</button>
    </div>
  )
}

export default Bonus
