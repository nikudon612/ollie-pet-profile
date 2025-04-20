export type Pet = {
    id: string;
    name: string;
    breeds: string[];
    activityLevel: string;
    neutered: boolean;
    age?: number;
    weightKg?: number;
    gender?: string;
    photoUrl?: string;
  };
  
export type RootStackParamList = {
    index: undefined; // no params sent *to* HomeScreen
    profile: {
      pet: Pet;
    };
  };
    notFound: undefined; // no params sent *to* NotFoundScreen  