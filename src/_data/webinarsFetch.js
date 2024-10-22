import fetchJson from "./fetch-json.js";

const baseURL = 'https://fdnd-agency.directus.app/items/'

export async function getWebinars() {
  const webinar = `${baseURL}avl_webinars?fields=*.*.*`;
  
  const webinars = await fetchJson(webinar);

	console.log(webinars);
	
  return {
    webinars: webinars.data,
  };
};