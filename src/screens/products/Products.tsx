import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { LinearProgress, Text } from 'react-native-elements';
import styles from './product-styles';
import Counter from '../../components/counter/Counter';
import ProductsService from '../../services/ProductsService';
import ProductItem from '../../components/product-item/ProductItem';

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

  if (products.length === 0) {
    return <LinearProgress />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text h4>Lista de productos</Text> */}
      {/* <Counter /> */}
      <FlatList
        data={products}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <ProductItem product={item} />;
        }}
      />
      {/* <Button onPress={onPressButton} title="Ir a la página de detalles" /> */}
    </SafeAreaView>
  );
};

export default Products;
