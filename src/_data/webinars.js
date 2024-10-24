import EleventyFetch from "@11ty/eleventy-fetch"

const baseURL = 'https://fdnd-agency.directus.app/items/'

export async function getWebinars(){
  const webinars = `${baseURL}avl_webinars`
  const response = EleventyFetch(webinars, {
    duration: "1d",
    type: "json"
  });

  return response.data;
}