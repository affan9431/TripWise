import axios from "axios";

const IP_ADDRESS = "192.168.1.67";

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
      `${BASE_URL}/api/v1/trips?budget=${budget}&tripStyle=${tripStyleEncoded}&groupSize=${groupSize}`,
    );
    return trips.data.data;
  } catch (error) {}
}
