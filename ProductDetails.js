import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from '../context/CartContext';
import { FavoriteContext } from '../context/FavoriteContext';

export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;
  const [selectedSize, setSelectedSize] = useState('');
  const { addToCart } = useContext(CartContext);
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoriteContext);

  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleAddToFavorites = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
      Alert.alert(
        'Product added to favorites',
        'Do you want to view your favorites or continue shopping?',
        [
          { text: 'Continue Shopping' },
          { text: 'View Favorites', onPress: () => navigation.navigate('FavoriteList') },
        ]
      );
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      Alert.alert('Please select a size.');
      return;
    }
    addToCart({ ...product, size: selectedSize });
    Alert.alert(
      'Product added to cart',
      'Do you want to view your cart or continue shopping?',
      [
        { text: 'Continue Shopping' },
        { text: 'View Cart', onPress: () => navigation.navigate('ShoppingCart') },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={product.image} style={styles.mainImage} />
        <View style={styles.textContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
          <Text style={styles.productDescription}>Our Zulu Beaded High heals feature vibrant red, blue, yellow, orange, navy, green and black beadwork.</Text>

          <Text style={styles.sizeLabel}>Select Size:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedSize}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedSize(itemValue)}
            >
              <Picker.Item label="Select size" value="" />
              <Picker.Item label="3" value="S" />
              <Picker.Item label="4" value="M" />
              <Picker.Item label="5" value="L" />
              <Picker.Item label="6" value="XL" />
              <Picker.Item label="7" value="XL" />
              <Picker.Item label="8" value="XL" />
            </Picker>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.favoriteButton, isFavorite && { backgroundColor: '#ff6f61' }]}
          onPress={handleAddToFavorites}
        >
          <Ionicons name="heart-outline" size={24} color="#fff" />
          <Text style={styles.buttonText}>Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
          <Ionicons name="cart-outline" size={24} color="#fff" />
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  mainImage: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
  textContainer: {
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    color: '#333',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    color: '#888',
    marginBottom: 20,
  },
  productDescription: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#666',
    marginBottom: 20,
  },
  sizeLabel: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: '#333',
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  favoriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#aaa',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
    fontFamily: 'Roboto-Bold',
  },
});
