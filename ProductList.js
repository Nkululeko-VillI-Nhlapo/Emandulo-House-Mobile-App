import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';

// Mapping object for category images
const categoryImages = {
  xhosa: {
    product1: require('../assets/images/xhosa/product1.jpg'),
    product2: require('../assets/images/xhosa/product2.jpg'),
    product3: require('../assets/images/xhosa/product3.jpg'),
    product4: require('../assets/images/xhosa/product4.jpg'),
    product5: require('../assets/images/xhosa/product5.jpg'),
    product6: require('../assets/images/xhosa/product6.jpg'),
    product7: require('../assets/images/xhosa/product7.jpg'),
    product8: require('../assets/images/xhosa/product8.jpg'),
    product9: require('../assets/images/xhosa/product9.jpg'),
    product10: require('../assets/images/xhosa/product10.jpg'),
  },
  zulu: {
    product1: require('../assets/images/zulu/product1.jpg'),
    product2: require('../assets/images/zulu/product2.jpg'),
    product3: require('../assets/images/zulu/product3.jpg'),
    product4: require('../assets/images/zulu/product4.jpg'),
    product5: require('../assets/images/zulu/product5.png'),
    product6: require('../assets/images/zulu/product6.jpg'),
    product7: require('../assets/images/zulu/product7.png'),
    product8: require('../assets/images/zulu/product8.png'),
    product9: require('../assets/images/zulu/product9.jpg'),
    product10: require('../assets/images/zulu/product10.jpg'),
  },
  venda: {
    product1: require('../assets/images/venda/product1.jpg'),
    product2: require('../assets/images/venda/product2.jpg'),
    product3: require('../assets/images/venda/product3.jpg'),
    product4: require('../assets/images/venda/product4.jpg'),
    product5: require('../assets/images/venda/product5.jpg'),
    product6: require('../assets/images/venda/product6.jpg'),
    product7: require('../assets/images/venda/product7.jpg'),
    product8: require('../assets/images/venda/product8.jpg'),
    product9: require('../assets/images/venda/product9.jpg'),
    product10: require('../assets/images/venda/product10.jpg'),
  },
  beadwork: {
    product1: require('../assets/images/beadwork/product1.jpg'),
    product2: require('../assets/images/beadwork/product2.jpg'),
    product3: require('../assets/images/beadwork/product3.jpg'),
    product4: require('../assets/images/beadwork/product4.jpg'),
    product5: require('../assets/images/beadwork/product5.jpg'),
    product6: require('../assets/images/beadwork/product6.jpg'),
    product7: require('../assets/images/beadwork/product7.jpg'),
    product8: require('../assets/images/beadwork/product8.jpg'),
    product9: require('../assets/images/beadwork/product9.jpg'),
    product10: require('../assets/images/beadwork/product10.jpg'),
  },
};

export default function ProductList({ route, navigation }) {
  const { category } = route.params;

  if (!categoryImages[category.toLowerCase()]) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Invalid category: {category}</Text>
      </View>
    );
  }

  const products = [
    { id: '1', name: 'Ndebele Colors Beaded Flower Pot', price: 'R150', image: categoryImages[category.toLowerCase()].product1 },
    { id: '2', name: 'Ndebele Colors Beaded Womans High Heels + Earrings', price: 'R2000', image: categoryImages[category.toLowerCase()].product2 },
    { id: '3', name: 'SA Beaded design Cup', price: 'R100', image: categoryImages[category.toLowerCase()].product3 },
    { id: '4', name: 'Xhosa Beaded design Cup', price: 'R100', image: categoryImages[category.toLowerCase()].product4 },
    { id: '5', name: 'Zulu White + Brown Beaded Womans High Heels', price: 'R1840', image: categoryImages[category.toLowerCase()].product5 },
    { id: '6', name: 'Zulu Colors Beaded Womans High Heels', price: 'R1900', image: categoryImages[category.toLowerCase()].product6 },
    { id: '7', name: 'Swati Colors Beaded Womans High Heels', price: 'R2000', image: categoryImages[category.toLowerCase()].product7 },
    { id: '8', name: 'Beaded Plate', price: 'R70', image: categoryImages[category.toLowerCase()].product8 },
    { id: '9', name: 'Ndebele Womans Beaded Sun Hat', price: 'R120', image: categoryImages[category.toLowerCase()].product9 },
    { id: '10', name: 'Ndebele Womans Hat +  Purse + Wristlet', price: 'R250', image: categoryImages[category.toLowerCase()].product10 },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Animatable.View animation="fadeInUp" duration={1000} style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item })}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Ionicons name="heart-outline" size={24} color="#333" style={styles.icon} />
                <Ionicons name="cart-outline" size={24} color="#333" style={styles.icon} />
              </View>
            </TouchableOpacity>
          </Animatable.View>
        )}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 10,
  },
  productName: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: '#888',
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  icon: {
    padding: 5,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});
