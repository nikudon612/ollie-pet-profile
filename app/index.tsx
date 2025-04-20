// app/(tabs)/index.tsx
import { useEffect, useState } from "react";
import { View, Text, Pressable, FlatList, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getPets, Pet } from "@/lib/pets";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={pets}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate("profile", { pet: item })}
            >
              <Image
                source={{ uri: item.photoUrl }}
                style={styles.image}
                resizeMode="cover"
              />
              <Text style={styles.name}>{item.name}</Text>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#F3EFE6",
  },
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
});
