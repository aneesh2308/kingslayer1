import API from "./api";
import { AUTH } from "../constants/routes";

export async function getAccessToken() {
  try {
    const res = await API.get(`${AUTH}/getToken`);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
