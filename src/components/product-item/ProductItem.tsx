import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import styles from './product-item-styles';
import { useNavigation } from '@react-navigation/core';
import Counter from '../counter/Counter';

const ProductItem = ({ product, onAddItemToCart, isItemAddedToCart }) => {
  const navigation = useNavigation<any>();
  const [numItems, setNumItems] = useState(1);

  const onPressCard = () => {
    navigation.navigate('product-details', { item: product });
  };

  const onPressAddButton = () => {
    onAddItemToCart(product, numItems);
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
        {isItemAddedToCart ? (
          <Text style={styles.numItemsText}>{`${product.units} item${
            product.units > 1 ? 's' : ''
          } en el carrito`}</Text>
        ) : (
          <Counter value={numItems} onChangeValue={setNumItems} />
        )}
      </View>
      <View>
        {isItemAddedToCart ? (
          <Button buttonStyle={styles.removeButtonContainer} title="Eliminar del carrito" />
        ) : (
          <Button onPress={onPressAddButton} title="Añadir al carrito" />
        )}
      </View>
    </View>
  );
};

export default ProductItem;
