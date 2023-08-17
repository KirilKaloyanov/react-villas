import { useQuery } from "@tanstack/react-query";

const BASE_URL = "https://dataservice.accuweather.com/";
const API_KEY = "uomGNvwUKoLCnxYd7DVxucz978Nj56Bc";
const LOCATION = 47068;
const LANGUAGE = "bg";

const endpoints = {
  current: `currentconditions/v1/${LOCATION}/?apikey=${API_KEY}&language=${LANGUAGE}&details=true`,
  //       "currentconditions/v1/47068?apikey=uomGNvwUKoLCnxYd7DVxucz978Nj56Bc&language=bg&details=true"
  forecast: `forecasts/v1/daily/5day/${LOCATION}/?apikey=${API_KEY}&language=${LANGUAGE}&metric=true`,
  //        "forecasts/v1/daily/5day/47068?apikey=uomGNvwUKoLCnxYd7DVxucz978Nj56Bc&language=bg&metric=true"
};

const useFetchWeather = <T>(key: string) => {
  return useQuery<T, Error>({
    queryKey: [key],
    queryFn: () => {
      // return fetch(BASE_URL + endpoints[key as keyof typeof endpoints]).then(
      return fetch(BASE_URL + endpoints[key as keyof typeof endpoints]).then(
        // ).then(
        (res) => {
          if (!res.ok) throw new Error("Request failed.");
          return res.json();
        }
      );
    },
  });
};

export default useFetchWeather;
