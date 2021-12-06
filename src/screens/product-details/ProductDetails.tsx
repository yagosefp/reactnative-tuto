import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const ProductDetails = ({ route }) => {
  const product = route.params.item;

  console.log('product: ', product);

  return (
    <SafeAreaView>
      <Text>Soy la página de detalles</Text>
    </SafeAreaView>
  );
};

export default ProductDetails;
