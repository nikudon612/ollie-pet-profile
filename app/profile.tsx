// app/profile.tsx
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import type { Pet } from "../types";

const navigation = useNavigation();

type RouteParams = {
  profile: {
    pet: Pet;
  };
};

export default function ProfileScreen() {
  const route = useRoute<RouteProp<RouteParams, "profile">>();
  const { pet } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>{pet.name}</Text>

      <View style={styles.row}>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.value}>{pet.id}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Breeds:</Text>
        <Text style={styles.value}>{pet.breeds.join(", ")}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Activity Level:</Text>
        <Text style={styles.value}>{pet.activityLevel}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Neutered:</Text>
        <Text style={styles.value}>{pet.neutered ? "Yes" : "No"}</Text>
      </View>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={{ color: "white" }}>{"< Back"}</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
  },
  value: {
    fontSize: 18,
    color: "#000",
  },
});
