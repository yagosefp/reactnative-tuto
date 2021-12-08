import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import styles from './cart-screen-styles';
import ProductItem from '../../components/product-item/ProductItem';

const CartScreen = ({ cart, onAddItemToCart }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <ProductItem product={item} onAddItemToCart={onAddItemToCart} isItemAddedToCart={true} />;
        }}
      />
    </SafeAreaView>
  );
};

export default CartScreen;
