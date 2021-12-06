import React, { useState } from 'react';
import { Button, Text } from 'react-native-elements';
import { View } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrementCount = () => {
    setCount(count + 1);
  };

  const onDecrementCount = () => {
    setCount(count - 1);
  };

  return (
    <View>
      <Button title="Decrement Count" onPress={onDecrementCount} disabled={count <= 0} />
      <Text>Current value: {count}</Text>
      <Button title="Increment Count" onPress={onIncrementCount} />
    </View>
  );
};

export default Counter;
