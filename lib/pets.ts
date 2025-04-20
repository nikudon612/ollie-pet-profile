//This file contains the mock data for pets and the function to simulate fetching this data from an API.

import type { Pet } from "../types";

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

// This function simulates an API call to fetch pet data
// This timeout is only to simulate a network delay and allow for loading states in the UI for demo purposes.
export const getPets = async (): Promise<Pet[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPets);
    }, 1000);
  });
};
