export type Pet = {
  id: string;
  name: string;
  breeds: string[];
  activityLevel: "Low" | "Medium" | "High";
  neutered: boolean;
  age?: number;
  weightKg?: number;
  gender?: "Male" | "Female";
  photoUrl?: string;
};

const mockPets: Pet[] = [
    {
        id: "1",
        name: "Bruce",
        breeds: ["Toy Poodle"],
        activityLevel: "Medium",
        neutered: true,
        age: 2,
        weightKg: 10,
        gender: "Male",
        photoUrl: "https://example.com/bruce.jpg",
    },
    {
        id: "2",
        name: "Oscar",
        breeds: ["Labrador Retriever, Chow Chow"],
        activityLevel: "High",
        neutered: true,
        age: 5,
        weightKg: 20,
        gender: "Male",
        photoUrl: "https://example.com/oscar.jpg",
    },
    {
        id: "3",
        name: "Goose",
        breeds: ["Cairn Terrier, Miniature Schnauzer, Yorkshire Terrier"],
        activityLevel: "High",
        neutered: false,
        age: 1,
        weightKg: 5,
        gender: "Female",
        photoUrl: "https://example.com/goose.jpg",
    },
    
];
