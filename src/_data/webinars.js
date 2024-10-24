import EleventyFetch from "@11ty/eleventy-fetch"

const baseURL = 'https://fdnd-agency.directus.app/items/'

export async function getWebinars(){
  const webinar = `${baseURL}avl_webinars`
  const response = EleventyFetch(webinar, {
    duration: "1d",
    type: "json"
  });

  const webinars = response.data;
  console.log(webinars);
  
  return webinars;
}