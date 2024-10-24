import fetchJson from "./fetch-json.js";

const baseURL = 'https://fdnd-agency.directus.app/items/'

export async function Webinars() {
  const webinar = `${baseURL}avl_webinars?fields=*.*.*&sort[]=-date`;
  
  const webinars = await fetchJson(webinar);
  
  return {
    webinars: webinars.data
  };
}