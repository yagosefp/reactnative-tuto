import React, { useState } from 'react';
import { Button, Text } from 'react-native-elements';
import { View } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text>Current value: {count}</Text>
      <Button title="Increment Count" onPress={onIncrementCount} />
    </View>
  );
};

export default Counter;
