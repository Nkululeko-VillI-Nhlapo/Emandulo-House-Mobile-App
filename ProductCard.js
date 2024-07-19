import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductCard = ({ product, onRemove, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        {onRemove && (
          <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
            <Ionicons name="trash-outline" size={24} color="#fff" />
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3, // Adds shadow on Android
    shadowColor: '#000', // Adds shadow on iOS
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: '#333',
  },
  price: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: '#888',
    marginVertical: 5,
  },
  removeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff6f61',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  removeButtonText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 16,
  },
});

export default ProductCard;