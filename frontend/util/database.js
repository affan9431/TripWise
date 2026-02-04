import axios from "axios";

const IP_ADDRESS = "192.168.1.70";

const BASE_URL = `http://${IP_ADDRESS}:5000`;

export async function signUp(formValues) {
  try {
    const res = await axios.post(`${BASE_URL}/api/v1/auth/signUp`, formValues);
    return res.data.token;
  } catch (error) {
    throw res.data.message || "Something went wrong";
  }
}

export async function logIn(formValues) {
  try {
    const res = await axios.post(`${BASE_URL}/api/v1/auth/logIn`, formValues);
    return res.data.token;
  } catch (error) {
    console.log(error);
    throw res.data.message || "Something went wrong";
  }
}

export async function filterTrip(budget, tripStyle, groupSize) {
  try {
    const tripStyleEncoded = encodeURIComponent(tripStyle);

    const trips = await axios.get(
      `${BASE_URL}/api/v1/trips/filterTrips?budget=${budget}&tripStyle=${tripStyleEncoded}&groupSize=${groupSize}`,
    );
    return trips.data.data;
  } catch (error) {
    throw error;
  }
}

export async function makeFavouriteTrip(userId, tripId) {
  try {
    await axios.patch(`${BASE_URL}/api/v1/auth/addFavorites/${userId}`, {
      tripId,
    });
  } catch (error) {
    throw error;
  }
}
export async function removeFavouriteTrip(userId, tripId) {
  try {
    await axios.patch(`${BASE_URL}/api/v1/auth/removeFavorites/${userId}`, {
      tripId,
    });
  } catch (error) {
    throw error;
  }
}
export async function getFavouriteTrip(userId) {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/v1/auth/getFavorites/${userId}`,
    );
    return res.data.data;
  } catch (error) {
    throw error;
  }
}

export async function getIntrestedTrips(category) {
  try {
    const categoryEncoded = encodeURIComponent(category);
    const res = await axios.get(
      `${BASE_URL}/api/v1/intrestedTrips?category=${categoryEncoded}`,
    );
    return res.data.data;
  } catch (error) {
    throw error;
  }
}

export async function updateUser(userId, updateData) {
  try {
    const res = await axios.patch(
      `${BASE_URL}/api/v1/auth/updateUser/${userId}`,
      updateData,
    );
    return res.data.token;
  } catch (error) {
    throw error;
  }
}
