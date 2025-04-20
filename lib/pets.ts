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
    photo: "Bruce",
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
    photo: "Oscar",
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
    photo: "Goose",
  },
  {
    id: "4",
    name: "Navi",
    breeds: ["Pit Bull"],
    activityLevel: "Medium",
    neutered: true,
    age: 8,
    weightKg: 25,
    gender: "Female",
    photo: "Navi",
},
{
    id: "5",
    name: "Jab",
    breeds: ["American Bulldog"],
    activityLevel: "Low",
    neutered: true,
    age: 2,
    weightKg: 30,
    gender: "Male",
    photo: "Jab",
},
{
    id: "6",
    name: "Bao-Bao",
    breeds: ["Dalmatian"],
    activityLevel: "High",
    neutered: true,
    age: 5,
    weightKg: 20,
    gender: "Female",
    photo: "Baobao",
},
{
    id: "7",
    name: "Tobi",
    breeds: ["American Bulldog"],
    activityLevel: "Low",
    neutered: true,
    age: 11,
    weightKg: 35,
    gender: "Male",
    photo: "Tobi",
}
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
