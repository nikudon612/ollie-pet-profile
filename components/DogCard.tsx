import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  useAnimatedValue,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Pet } from "@/lib/pets";
import { useEffect, useRef } from "react";

interface DogCardProps {
  pet: Pet;
  photo: any;
  onPress: () => void;
}

export default function DogCard({ pet, photo, onPress }: DogCardProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <Pressable style={styles.card} onPress={onPress}>
        <ImageBackground
          source={photo}
          style={styles.card}
          imageStyle={styles.image}
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={styles.overlay}
          >
            <Text style={styles.name}>{pet.name}</Text>
            <Text style={styles.id}>ID: {pet.id}</Text>
          </LinearGradient>
        </ImageBackground>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 400,
    borderRadius: 40,
    overflow: "hidden",
    marginBottom: 16,
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
  id: {
    fontSize: 16,
    color: "#f9f9f9",
    opacity: 0.8,
    marginLeft: 1,
  },
});
