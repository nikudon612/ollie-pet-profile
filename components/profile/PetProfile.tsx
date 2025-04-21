import { useRoute, RouteProp } from "@react-navigation/native";
import type { Pet } from "../types";
import PetProfile from "../components/profile/PetProfile";

type RouteParams = {
  profile: {
    pet: Pet;
  };
};



export default function ProfileScreen() {
  const route = useRoute<RouteProp<RouteParams, "profile">>();
  const { pet } = route.params;

  const photoSource = photoMap[pet.photo];

  return <PetProfile pet={pet} photoSource={photoSource} />;
}
