import EleventyFetch from "@11ty/eleventy-fetch"

const baseURL = 'https://fdnd-agency.directus.app/items/'

export default async function (){
  const contouring = `${baseURL}avl_contourings`
  const response = await EleventyFetch(contouring, {
    duration: "1d",
    type: "json"
  });

  const contourings = response.data;
  
  return contourings;
}