import Loader from 'components/loader';
import { useGetCountry } from 'hooks/api';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CountryDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const countryName = params.name;

  const {
    data: countries,
    error,
    isPending,
  } = useGetCountry(countryName || '');
  const country = countries?.[0];

  if (isPending) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (error?.status === 404) {
    navigate('/404');
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/3 mx-auto rounded-md bg-[#F3F4F6] p-10 mt-10">
        <p>Flag: {country?.flag}</p>
        <p>Common name: {country?.name.common}</p>
        <p>Capital: {country?.capital}</p>
      </div>
    </div>
  );
};

export default CountryDetails;
