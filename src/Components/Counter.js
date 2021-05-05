import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Button, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectCounterIsAdding,
  selectCounterValue,
} from '../Store/Selectors/Counter';
import {decrement, increment} from '../Store/Slices/Counter';
import {delayedIncrement} from '../Store/Saga/Actions/Counter';

const Counter = ({color = 'black'}) => {
  const [amount, setAmount] = useState('');
  const value = useSelector(selectCounterValue);
  const isAdding = useSelector(selectCounterIsAdding);

  const dispatch = useDispatch();

  return (
    <View>
      <Button onPress={() => dispatch(decrement())} title="-" />
      <Text style={{color}}>{value}</Text>
      <Button onPress={() => dispatch(increment())} title="+" />
      <View>
        <TextInput
          placeholder="Enter amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
        <Button
          onPress={() => dispatch(delayedIncrement(+amount))}
          title={isAdding ? 'Adding...' : 'ADD'}
          disabled={isAdding}
        />
      </View>
    </View>
  );
};

Counter.propTypes = {
  color: PropTypes.oneOf(['white', 'black', 'blue', 'red', 'green']),
};

export default Counter;
