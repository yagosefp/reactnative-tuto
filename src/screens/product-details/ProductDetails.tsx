import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import styles from './product-details-styles';
import { useNavigation } from '@react-navigation/core';

const ProductDetails = ({ route }) => {
  const navigation = useNavigation();
  const product = route.params.item;

  useEffect(() => {
    navigation.setOptions({ headerTitle: product.name });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: product.image }} />
          </View>
          <Text style={styles.brandText}>{product.brand}</Text>
          <View style={styles.titleContainer}>
            <Text style={styles.nameText}>{product.name}</Text>
            <Text style={styles.priceText}>{`${product.unitPrice}€`}</Text>
          </View>

          <Text style={styles.sectionHeader}>Ingredientes</Text>
          <Text>{product.ingredients}</Text>

          <Text style={styles.sectionHeader}>Conservación</Text>
          <Text>{product.conservation}</Text>

          {product.howToUse !== undefined && (
            <>
              <Text style={styles.sectionHeader}>Modo de empleo</Text>
              <Text>{product.howToUse}</Text>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
