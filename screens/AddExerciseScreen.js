import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AddExerciseScreen({ navigation }) {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const handleSave = () => {
    if (!name || !desc) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    const newExercise = {
      id: Date.now().toString(),
      name,
      desc,

      image: 'https://media.istockphoto.com/id/1294146788/photo/asian-chinese-man-athlete-workout-in-an-obstacle-course-burpee.webp?s=1024x1024&w=is&k=20&c=TfkXMiWtAqHLJVw-xKKdlZNIKsrxgMx2mb10tgKUzpU=',
      instructions: 'No instructions added yet. Please update later.'
    };

    
    navigation.navigate('Home', { newExercise });

    setName('');
    setDesc('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>➕ Add UR Favorite Exercise</Text>

      <TextInput
        placeholder="Exercise Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Exercise Description"
        value={desc}
        onChangeText={setDesc}
        style={styles.input}
      />

      <Button title="Save Exercise" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
});