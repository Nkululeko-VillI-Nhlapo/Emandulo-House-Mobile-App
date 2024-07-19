import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

export default function ProductCategory({ route, navigation }) {
  const { category } = route.params;

  // Define video sources for the different categories
  const videoSources = {
    xhosa: require('../assets/videos/xhosa.mp4'),
    zulu: require('../assets/videos/zulu.mp4'),
    venda: require('../assets/videos/venda.mp4'),
    beadwork: require('../assets/videos/beadwork.mp4'),
  };

  // Define welcome messages for the different categories
  const welcomeMessages = {
    xhosa: 'Welcome, Wamkelekile',
    zulu: 'Welcome, Siyakwamukela',
    venda: 'Welcome, No Tanganedziwa',
    beadwork: 'Welcome, Rea o Amohela',
  };

  // Ensure the category is in lowercase to match the keys in videoSources and welcomeMessages
  const lowerCaseCategory = category.toLowerCase();

  return (
    <View style={styles.container}>
      {videoSources[lowerCaseCategory] ? (
        <Video
          source={videoSources[lowerCaseCategory]}
          style={styles.backgroundVideo}
          resizeMode="cover"
          shouldPlay
          isLooping
          isMuted // Ensure the video is muted
        />
      ) : (
        <Text style={styles.errorText}>Video not found for category: {category}</Text>
      )}
      <View style={styles.overlay}>
        <Text style={styles.title}>{welcomeMessages[lowerCaseCategory]}</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('ProductList', { category: lowerCaseCategory })}
        >
          <Text style={styles.buttonText}>Click To See What We Have For You</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Soft white background
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#2c3e50', // Softer dark color
    fontWeight: '600', // Slightly lighter than bold
    textAlign: 'center',
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});




