export const updateQueryParams = (key: string, value: string) => {
  const queryParams = new URLSearchParams(window.location.search);
  queryParams.set(key, value);

  const newUrl = `${window.location.pathname}?${queryParams.toString()}`;

  window.history.replaceState({}, "", newUrl);
};
