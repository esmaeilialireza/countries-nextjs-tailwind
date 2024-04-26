export const appendQueryParams = (url: string, requestParams: Object) => {
  if (!requestParams) {
    return url;
  }

  const queryParams = new URLSearchParams();
  Object.entries(requestParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      queryParams.append(key, value.toString());
    }
  });

  const queryString = queryParams.toString();
  return queryString ? `${url}?${queryString}` : url;
};
