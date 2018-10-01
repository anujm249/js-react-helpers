export const getParamFromURL = (paramKey) => {
  const url = new URL(window.location.href);
  return url.searchParams.get(paramKey);
};

export default {
	getParamFromURL,
}