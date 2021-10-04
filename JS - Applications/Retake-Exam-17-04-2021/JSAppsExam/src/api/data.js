import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

// Application-specific requests

// get all pet
export async function getAllPets() {
  return await api.get(host + "/data/pets?sortBy=_createdOn%20desc");
}

//get recent pet
export async function getMyPets(userId) {
  return await api.get(host + `/data/pets?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

//get pet by id
export async function getPetById(id) {
  return await api.get(host + "/data/pets/" + id);
}

// create pet
export async function createPet(pet) {
  return await api.post(host + "/data/pets", pet);
}

// edit pet by id
export async function updatePet(id, pet) {
  return await api.put(host + "/data/pets/" + id, pet);
}

// delete pet by id
export async function deletePet(id) {
  return await api.del(host + "/data/pets/" + id);
}

//get my pet ???
export async function searchPet(query) {
  return await api.get(
    host +
      `/data/pets?where=title%20LIKE%20%22${query}%22`
  );
}
