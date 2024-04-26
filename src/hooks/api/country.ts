import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'constant/queryKeys';
import { getCountries, getCountry } from 'services';
import { Error } from 'types';

import { Country } from 'types/api';

export const useGetCountries = () =>
  useQuery<Country[], Error>({
    queryKey: [queryKeys.country.list],
    queryFn: () => getCountries(),
  });

export const useGetCountry = (name: string) =>
  useQuery<Country[], Error>({
    queryKey: [queryKeys.country.details, name],
    queryFn: () => getCountry(name),
    enabled: name !== '',
  });
