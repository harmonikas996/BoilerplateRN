import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Button, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectCounterValue} from '../Store/Selectors/CounterSelectors';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../Store/Slices/CounterSlice';

const Counter = ({color}) => {
  const [amount, setAmount] = useState('');
  const value = useSelector(selectCounterValue);

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
          onPress={() => dispatch(incrementByAmount(+amount))}
          title="ADD"
        />
      </View>
    </View>
  );
};

Counter.propTypes = {
  color: PropTypes.oneOf(['white', 'black', 'blue', 'red', 'green']),
};

export default Counter;
