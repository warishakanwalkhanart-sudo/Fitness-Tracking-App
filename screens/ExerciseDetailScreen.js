import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ExerciseDetailScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>

      <Image source={{ uri: item.image }} style={styles.image} />

      <Text style={styles.desc}>{item.desc}</Text>

      <Text style={styles.sectionTitle}>💪 Instructions</Text>
      <Text style={styles.text}>{item.instructions}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  image: {
    width: '40%',
    height: 200,
    borderRadius: 12,
    marginBottom: 15,
  },

  desc: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },

  text: {
    fontSize: 15,
    marginTop: 5,
    lineHeight: 22,
  },
});