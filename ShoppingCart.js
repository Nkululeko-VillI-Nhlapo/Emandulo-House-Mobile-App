import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from '../context/CartContext';

export default function ShoppingCart({ navigation }) {
  const { cartItems, addToCart, removeFromCart, updateCartQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price.replace('R', ''));
      return total + itemPrice * item.quantity;
    }, 0).toFixed(2); // Ensuring the total is always a fixed-point number
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.cartItemImage} />
      <Text style={styles.cartItemText}>{item.name}</Text>
      <Text style={styles.cartItemPrice}>{`${item.price}`}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => updateCartQuantity(item.id, item.quantity - 1)}>
          <Ionicons name="remove-circle-outline" size={24} color="blue" />
        </TouchableOpacity>
        <Text style={styles.cartItemQuantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => updateCartQuantity(item.id, item.quantity + 1)}>
          <Ionicons name="add-circle-outline" size={24} color="blue" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.cartList}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>{`Total: R${calculateTotal()}`}</Text>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('Checkout')}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cartList: {
    paddingBottom: 100,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  cartItemImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  cartItemText: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    flex: 2,
  },
  cartItemPrice: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    flex: 1,
    textAlign: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  cartItemQuantity: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    marginHorizontal: 4,
  },
  totalContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f8f8f8',
  },
  totalText: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    textAlign: 'right',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 5,
  },
  checkoutButtonText: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: '#fff',
    textAlign: 'center',
  },
});

