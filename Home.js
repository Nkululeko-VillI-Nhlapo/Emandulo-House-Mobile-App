import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={require('../assets/images/background.jpg')} style={styles.header}>
        <View style={styles.overlay}>
          <Text style={styles.headerText}>Emandulo House</Text>
          <Text style={styles.subHeaderText}>Discover Premium Culture And Heritage Wear, All Within Reach And At An Affordable Price</Text>
        </View>
      </ImageBackground>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductCategory', { category: 'Xhosa' })}>
          <ImageBackground source={require('../assets/images/xhoH.jpg')} style={styles.cardImage}>
            <View style={styles.cardOverlay}>
              <Text style={styles.cardText}>Xhosa</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductCategory', { category: 'Zulu' })}>
          <ImageBackground source={require('../assets/images/zulH.jpg')} style={styles.cardImage}>
            <View style={styles.cardOverlay}>
              <Text style={styles.cardText}>Zulu</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductCategory', { category: 'Venda' })}>
          <ImageBackground source={require('../assets/images/venH.jpg')} style={styles.cardImage}>
            <View style={styles.cardOverlay}>
              <Text style={styles.cardText}>Venda</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductCategory', { category: 'Beadwork' })}>
          <ImageBackground source={require('../assets/images/beaH.jpg')} style={styles.cardImage}>
            <View style={styles.cardOverlay}>
              <Text style={styles.cardText}>Beadwork</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subHeaderText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  card: {
    width: '45%',
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Adds shadow for iOS
    shadowOpacity: 0.8, // Adds shadow for iOS
    shadowRadius: 5, // Adds shadow for iOS
  },
  cardImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
  },
});

