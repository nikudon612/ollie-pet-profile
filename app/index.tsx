// app/(tabs)/index.tsx
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getPets, Pet } from "@/lib/pets";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient'; // we'll use this for real gradient

// Must use static require calls!
const photoMap: Record<string, any> = {
  Bruce: require("../assets/images/Bruce.jpg"),
  Oscar: require("../assets/images/Oscar.jpg"),
  Goose: require("../assets/images/Goose.jpg"),
  Navi: require("../assets/images/Navi.jpg"),
  Jab: require("../assets/images/Jab.jpg"),
  Baobao: require("../assets/images/Baobao.jpg"),
  Tobi: require("../assets/images/Tobi.jpg"),
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
              <ImageBackground
                source={photoMap[item.photo]}
                style={styles.card}
                imageStyle={styles.image}
              >
                <LinearGradient
                  colors={["transparent", "rgba(0,0,0,0.8)"]}
                  style={styles.overlay}
                >
                  <Text style={styles.name}>{item.name}</Text>
                </LinearGradient>
              </ImageBackground>

              {/* Overlay container */}
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#e6e1d5",
  },
  card: {
    width: "100%",
    height: 300,
    borderRadius: 40,
    overflow: "hidden",
    marginBottom: 18,
    justifyContent: "flex-end",
  },
  image: {
    borderRadius: 12,
  },
  overlay: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 24,
    justifyContent: "flex-end",
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#f9f9f9",
  },
});
