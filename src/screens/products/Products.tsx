import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import styles from './product-styles';
import Counter from '../../components/counter/Counter';
import ProductsService from '../../services/ProductsService';

const Products = () => {
  const navigation = useNavigation<any>();
  const [products, setProducts] = useState([]);

  const onPressButton = () => {
    navigation.navigate('product-details');
  };

  useEffect(() => {
    const getAsyncProducts = async () => {
      const result = await ProductsService.getProducts();
      setProducts(result.data);
    };

    getAsyncProducts();
  }, []);

  console.log(products);

  return (
    <SafeAreaView style={styles.container}>
      <Text h4>Soy la página de productos</Text>
      <Counter />

      <Button onPress={onPressButton} title="Ir a la página de detalles" />
    </SafeAreaView>
  );
};

export default Products;
