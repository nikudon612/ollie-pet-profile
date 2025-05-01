// components/DogProfile.tsx
import {
  Animated,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import type { Pet } from "../types";
import { useEffect } from "react";

// Static image map for pet photos
const photoMap: Record<string, any> = {
  Bruce: require("../assets/images/Bruce.jpg"),
  Oscar: require("../assets/images/Oscar.jpg"),
  Goose: require("../assets/images/Goose.jpg"),
  Navi: require("../assets/images/Navi.jpg"),
  Jab: require("../assets/images/Jab.jpg"),
  Baobao: require("../assets/images/Baobao.jpg"),
  Tobi: require("../assets/images/Tobi.jpg"),
};

type Props = {
  pet: Pet;
};

export default function DogProfile({ pet }: Props) {
  const imageOpacity = new Animated.Value(0);
  const contentOpacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(imageOpacity, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }),
      Animated.timing(contentOpacity, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={photoMap[pet.photo]}
        style={styles.photo}
        resizeMode="cover"
      />
      <Animated.ScrollView>
        <Text style={styles.heading}>{pet.name}</Text>

        <View style={styles.row}>
          <Text style={styles.label}>
            ID:<Text style={styles.value}> {pet.id}</Text>
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            Breeds:<Text style={styles.value}> {pet.breeds.join(", ")}</Text>
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            Activity Level:
            <Text style={styles.value}> {pet.activityLevel}</Text>
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            Neutered:
            <Text style={styles.value}> {pet.neutered ? "Yes" : "No"}</Text>
          </Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#403c36",
  },
  row: {
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#403c36",
  },
  value: {
    fontSize: 16,
    color: "#403c36",
    fontWeight: "600", // Corrected "semibold"
  },
  photo: {
    width: "100%",
    height: 400,
    borderRadius: 20,
    marginBottom: 20,
  },
});
