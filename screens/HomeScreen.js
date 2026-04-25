import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation, route }) {

  const [exercises, setExercises] = useState([
    {
      id: '1',
      name: 'Push Ups',
      desc: 'Upper body exercise',
      image: 'https://media.istockphoto.com/id/498315681/photo/feeling-good-looking-great-from-working-out-regularly.jpg?s=1024x1024&w=is&k=20&c=E4Qg-O-p2FUIvdHID-fY-OmYCImxC056fR4ZjGY1rLY=',
     
      instructions: 'Start in a high plank position with palms flat on the floor, slightly wider than shoulder-width, and hands under shoulders. Engage your abs and glutes to keep your body in a straight line. Inhale, and lower your body with control, keeping your elbows at roughly a 45-degree angle to your body, until your chest or chin touches the floor. Exhale, and use your chest and arm muscles to push your body back up to the starting position, avoiding locking your elbows.If there is little pain so dont think you are suffering but you rebuild your muscles stronger so enjoy the pain as "if life gives u lemons u make a lemonade". Enjoiyng pain is not the goal getting comfortable with effort is. Do 10–15 reps.'
    },
    {
      id: '2',
      name: 'Squats',
      desc: 'Leg exercise',
      image:'https://media.istockphoto.com/id/2208934581/photo/male-athlete-exercising-squats-with-medicine-ball-in-a-gym.jpg?s=612x612&w=0&k=20&c=yKaUtewMVf_CJLAnxF_x36S5Vg7wUToi5RoDux-sw4Y=',
      instructions: 'Stand with your feet shoulder-width apart, lower your hips back and down while keeping your chest up and knees aligned with your toes, then push through your heels to return to standing. Do 12–15 reps. "We all have ups & downs in life we call them squats."'
    },
  
  {
      id: '3',
      name: 'lunge',
      desc: 'lower-body exercise',
      image:'https://media.istockphoto.com/id/2217065374/photo/athletic-couple-exercising-lunges-with-dumbbells-in-a-gym.jpg?s=612x612&w=0&k=20&c=VHm14rgGXlobetjSASKqf14u6Dp0wzyp4v5rsBoIMXk=',
      instructions: 'Step forward with one leg, lower your hips until both knees are bent at about 90 degrees, then push back up to the starting position and repeat with the other leg. Do 12–15 reps.'
    },
  {
      id: '4',
      name: 'Plank',
      desc: 'strengthen core muscles',
      image:'https://media.istockphoto.com/id/2169920596/photo/side-view-of-a-fit-african-american-sportswoman-in-shape-doing-planks-at-gym.jpg?s=612x612&w=0&k=20&c=xFuQ9bT4jl3t-_l3RlQ8j9Z9ITxOSSMS6kBmB1rxnkE=',
      instructions: 'Start in a forearm position, keep your body straight from head to heels, engage your core, and hold the position without letting your hips sag or rise.Planks target your core stability muscles do it everyday like 1% better everyday.Do 12–15 reps.'
    },
  {
      id: '5',
      name: 'burpees',
      desc: 'full body exercise',
      image:'https://media.istockphoto.com/id/1363075003/photo/fit-woman-doing-a-burpee-exercise-endurance-training-step-by-step-instructions-burpee.jpg?s=612x612&w=0&k=20&c=Ct96YAy401Dp5qR728tAkhCf_M2KC-yJ7bn6-2ZWb2s=',
      instructions: 'Start standing, drop into a squat, place hands on the floor, kick feet back into a plank, perform a push-up, jump feet forward, and finish with a powerful jump upward. Do 12–15 reps.Do not think its difficult it is so easy peasy lemons squeezy.'
    }
  ]);

  
  useEffect(() => {
    if (route?.params?.newExercise) {

      setExercises(prev => [
        ...prev,
        route.params.newExercise
      ]);

      
      navigation.setParams({ newExercise: null });
    }
  }, [route?.params?.newExercise]);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Choose your best Exercises</Text>

            <Text >1% Better Everyday</Text>


      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Details', { item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate('AddExercise')}
      >
        <Text style={styles.addText}>+ Add Exercise</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },

  card: {
    padding: 15,
    backgroundColor: '#d4d7db',
    marginBottom: 10,
    borderRadius: 10,
  },

  name: { fontSize: 18, fontWeight: 'bold' },
  desc: { color: 'gray' },

  addBtn: {
    backgroundColor: '#0d0d0d',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  addText: { color: '#fff', textAlign: 'center' },
});