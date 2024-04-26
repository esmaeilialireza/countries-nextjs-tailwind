import axiosHandler from 'config/axios';
import { urls } from 'constant/urls';
import { Country } from 'types/api';

export const getCountries = () =>
  axiosHandler
    .get<Country[]>(urls.country.list)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export const getCountry = (name: string) =>
  axiosHandler
    .get<Country[]>(urls.country.details(name))
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
