import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import styles from './product-styles';

const Products = () => {
  const navigation = useNavigation<any>();

  const onPressButton = () => {
    navigation.navigate('product-details');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text h4>Soy la página de productos</Text>
      <Button onPress={onPressButton} title="Ir a la página de detalles" />
    </SafeAreaView>
  );
};

export default Products;
