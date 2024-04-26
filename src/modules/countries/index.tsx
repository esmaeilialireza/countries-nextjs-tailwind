import { useGetCountries, useGetCountry } from 'hooks/api';

import SearchBar from './search-bar';
import { Link } from 'react-router-dom';
import { paths } from 'routes/paths';
import { useMemo, useState } from 'react';
import { useDebounce } from 'hooks';
import Loader from 'components/loader';
import { Country } from 'types/api';

const Countries = () => {
  const [searchText, setSearchText] = useState<string>('');
  const debouncedSearchText = useDebounce(searchText);

  const { data: allCountries } = useGetCountries();
  const {
    data: searchedCountries,
    error,
    isFetching,
    isLoading,
  } = useGetCountry(debouncedSearchText);

  const countries = useMemo((): Country[] => {
    if (debouncedSearchText) {
      return searchedCountries || [];
    }

    return allCountries || [];
  }, [allCountries, debouncedSearchText, searchedCountries]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/3 mx-auto pt-6">
        <SearchBar
          onSearch={(searchTerm) => setSearchText(searchTerm)}
          value={searchText}
        />

        {(isFetching || isLoading) && (
          <div className="flex justify-center items-center mt-4">
            <Loader />
          </div>
        )}

        {error?.status === 404 && (
          <p className="mt-4">
            Country <i>{debouncedSearchText}</i> not found!
          </p>
        )}

        <ul className="flex flex-col gap-4 mt-6">
          {(searchedCountries || countries || []).map((country) => (
            <Link
              key={country.name.common}
              to={paths.countries.details(
                encodeURIComponent(country.name.common)
              )}>
              <li className="bg-[#F3F4F6] flex items-center gap-4 rounded-md">
                <div className="w-10 h-10 flex justify-center items-center bg-[#DEE2E6] rounded-md">
                  {country.flag}
                </div>
                <p>{country.name.common}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Countries;
