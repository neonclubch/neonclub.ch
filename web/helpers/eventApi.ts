import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const EVENTS_BASE_URL =
  "https://europe-west6-neo-tickets-shop.cloudfunctions.net/neo-event-api";

export const pretixClient = axios.create({
  baseURL: EVENTS_BASE_URL,
});

export function getEvents(options: Parameters<typeof useQuery>[0]) {
  console.log(options);
  const [_key, params] = options.queryKey;
  const request = pretixClient.get<PretixResponse<Event[]>>("/events", {
    params,
  });

  const onSuccess = (response: AxiosResponse<PretixResponse<Event[]>>) => {
    return response?.data?.results;
  };

  const onError = (error: AxiosError) => {
    return Promise.reject(error.response?.data);
  };

  return request.then(onSuccess).catch(onError);
}

export const useApiGetEvents = (
  queryParams: AxiosRequestConfig["params"] = {},
) =>
  useQuery({
    queryKey: ["events", queryParams],
    queryFn: getEvents,
  });

interface PretixResponse<T> {
  count: number;
  next: unknown | null;
  previous: unknown | null;
  results: T;
}

interface LocalizedString {
  en: string;
  [locale: string]: string;
}

interface Event {
  name: LocalizedString;
  slug: string;
  live: boolean;
  testmode: boolean;
  currency: string;
  date_from: string;
  date_to: string;
  date_admission: string | null;
  is_public: boolean;
  presale_start: string | null;
  presale_end: string | null;
  location: LocalizedString;
  geo_lat: number;
  geo_lon: number;
  has_subevents: boolean;
  meta_data: unknown;
  seating_plan: unknown;
  plugins: unknown;
  seat_category_mapping: unknown;
  timezone: string;
  item_meta_properties: unknown;
  all_sales_channels: boolean;
  limit_sales_channels: unknown;
  public_url: string;
  sales_channels: unknown;
}
