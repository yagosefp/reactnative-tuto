import React from 'react';
import { Button, Text } from 'react-native-elements';
import { View } from 'react-native';
import styles from './counter-styles';

const Counter = ({ value, onChangeValue }) => {
  const onIncrementCount = () => {
    onChangeValue(value + 1);
  };

  const onDecrementCount = () => {
    onChangeValue(value - 1);
  };

  return (
    <View style={styles.container}>
      <Button
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonTextStyle}
        title="-"
        onPress={onDecrementCount}
        disabled={value <= 1}
      />
      <Text>{value}</Text>
      <Button
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonTextStyle}
        title="+"
        onPress={onIncrementCount}
      />
    </View>
  );
};

export default Counter;
