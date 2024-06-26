import axios from "axios";

const PRETIX_BASE_URL = "https://pretix.eu/api/v1/organizers/neon";
export const pretixClient = axios.create({
  baseURL: PRETIX_BASE_URL,
});

export function getEvents() {
  return pretixClient.get<PretixResponse<Event[]>>('/events')
} 

interface PretixResponse<T> {
  count: number
  next: null
  previous: null
  results: T
}

interface Event {
  name: string
}