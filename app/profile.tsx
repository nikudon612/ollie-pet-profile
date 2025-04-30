// app/profile.tsx
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import type { Pet } from "../types";
import DogProfile from "@/components/DogProfile";

type RouteParams = {
  profile: {
    pet: Pet;
  };
};

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

export default function ProfileScreen() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RouteParams, "profile">>();
  const { pet } = route.params;

  return (
    <DogProfile pet={pet} />
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
    fontWeight: "semibold",
  },
  photo: {
    width: "100%",
    height: 400,
    borderRadius: 20,
    marginBottom: 20,
  },
});
