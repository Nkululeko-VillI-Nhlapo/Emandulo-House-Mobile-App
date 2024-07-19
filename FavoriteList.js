import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FavoriteContext } from '../context/FavoriteContext';
import { CartContext } from '../context/CartContext';

export default function FavoriteList() {
  const { favorites, removeFromFavorites } = useContext(FavoriteContext);
  const { addToCart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.favoriteItem}>
      <Text style={styles.favoriteItemText}>{item.name}</Text>
      <Text style={styles.favoriteItemPrice}>{`${item.price}`}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => removeFromFavorites(item.id)}>
          <Ionicons name="trash-outline" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addToCart(item)}>
          <Ionicons name="cart" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.favoriteList}
        ListEmptyComponent={<Text style={styles.emptyMessage}>No favorite items yet!</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  favoriteList: {
    paddingBottom: 100,
  },
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  favoriteItemText: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    flex: 2,
  },
  favoriteItemPrice: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    flex: 1,
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#777',
  },
});
