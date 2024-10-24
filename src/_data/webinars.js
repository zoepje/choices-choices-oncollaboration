import EleventyFetch from "@11ty/eleventy-fetch"

const baseURL = 'https://fdnd-agency.directus.app/items/'

export default async function (){
  const webinar = `${baseURL}avl_webinars?fields=*,speakers.avl_speakers_id.*,categories.avl_categories_id.*&sort[]=-date&limit=4`
  const response = await EleventyFetch(webinar, {
    duration: "1d",
    type: "json"
  });

  const webinars = response.data;
  
  return webinars;
}