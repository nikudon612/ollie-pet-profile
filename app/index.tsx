// app/(tabs)/index.tsx
import { useEffect, useState } from 'react';
import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getPets, Pet } from '@/lib/pets';

export default function HomeScreen() {
  const [pets, setPets] = useState<Pet[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchPets = async () => {
      const data = await getPets();
      setPets(data);
    };
    fetchPets();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('profile', { pet: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text>ID: {item.id}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
});
