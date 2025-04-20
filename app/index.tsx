// app/(tabs)/index.tsx
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getPets, Pet } from "@/lib/pets";
import { SafeAreaView } from "react-native-safe-area-context";

// Must use static require calls!
const photoMap: Record<string, any> = {
  Bruce: require("../assets/images/Bruce.jpg"),
  Oscar: require("../assets/images/Oscar.jpg"),
  Goose: require("../assets/images/Goose.jpg"),
};

export default function HomeScreen() {
  const navigation = useNavigation();
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getPets();
      setPets(data);
    };
    fetch();
  }, []);

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
                source={photoMap[item.photo]}
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
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 40,
    marginBottom: 24,
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
