import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import styles from './product-item-styles';
import { useNavigation } from '@react-navigation/core';
import Counter from '../counter/Counter';

const ProductItem = ({ product, onAddItemToCart }) => {
  const navigation = useNavigation<any>();

  const onPressCard = () => {
    navigation.navigate('product-details', { item: product });
  };

  const onPressAddButton = () => {
    onAddItemToCart(product);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPressCard}>
        <View style={styles.topContainer}>
          <Image
            style={styles.cardImage}
            source={{
              uri: product.image
            }}
          />
          <View style={styles.brandContainer}>
            <Text style={styles.brandText}>{product.brand}</Text>
          </View>
        </View>

        <View style={styles.middleContainer}>
          <Text style={styles.nameText}>{product.name}</Text>
          <Text style={styles.priceText}>{`${product.unitPrice}€`}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.counterContainer}>
        <Counter />
      </View>
      <View>
        <Button onPress={onPressAddButton} title="Añadir al carrito" />
      </View>
    </View>
  );
};

export default ProductItem;
