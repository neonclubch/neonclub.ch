import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const EVENTS_BASE_URL =
  "https://europe-west6-neo-tickets-shop.cloudfunctions.net/neo-rsvp-api";

export const pretixClient = axios.create({
  baseURL: EVENTS_BASE_URL,
});

export function getRsvp(options: Parameters<typeof useQuery>[0]) {
  console.log(options);
  const [key, id, params] = options.queryKey;
  const request = pretixClient.get<RsvpResponse>(`/${key}/${id}`, {
    params,
  });

  const onSuccess = (response: AxiosResponse<RsvpResponse>) => {
    return response?.data;
  };

  const onError = (error: AxiosError) => {
    return Promise.reject(error.response?.data);
  };

  return request.then(onSuccess).catch(onError);
}

export const useApiGetRsvp = (
  id: string,
  queryParams: AxiosRequestConfig["params"] = {},
) =>
  useQuery({
    queryKey: ["rsvp", id, queryParams],
    queryFn: getRsvp,
    enabled: !!id,
  });

interface RsvpResponse {
  id: number;
  firstName: string;
  lastName?: string;
  lang: "it" | "de" | "en";
  inviteSent?: string;
}
