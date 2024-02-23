import axios from "axios";
import { FetchedData } from "../interfaces/interfaces";

export const fetchData = async (page: number) => {
  const url =
    page === 1
      ? "https://swapi.dev/api/planets/?format=json"
      : `https://swapi.dev/api/planets/?page=${page}&format=json`;
  const data = await axios.get(url).then((response) => response.data);
  return data as FetchedData;
};
