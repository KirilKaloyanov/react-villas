import { useQuery } from "@tanstack/react-query";

const BASE_URL = "http://api.weatherapi.com/v1/";
const API_KEY = "49ff9d66da0d49aea6a91332230107";
const LOCATION = "41.962910,23.730058";

const endpoints = {
  current: `current.json?key=${API_KEY}&q=${LOCATION}`,
  forecast: `forecast.json?key=${API_KEY}&q=${LOCATION}&days=3&lang=bg`,
};

const useFetchWeather = <T>(key: string) => {
  return useQuery<T, Error>({
    queryKey: [key],
    queryFn: () => {
      return fetch(BASE_URL + endpoints[key as keyof typeof endpoints]).then(
        (res) => {
          if (!res.ok) throw new Error("Request failed.");
          return res.json();
        }
      );
    },
  });
};

export default useFetchWeather;
