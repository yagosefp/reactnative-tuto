import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import styles from './product-item-styles';

const ProductItem = ({ product }) => {
  return (
    <View style={styles.card}>
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
      <View style={styles.actionContainer}>
        <Button title="Añadir al carrito" />
      </View>
    </View>
  );
};

export default ProductItem;
