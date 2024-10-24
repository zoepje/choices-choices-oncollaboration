import { Navigation } from "./src/_includes/components/Navigation.js";
import { WebinarOverview } from "./src/_includes/components/Webinar-overview.js";
import { ContouringOverview } from "./src/_includes/components/Contouring-overview.js";
import { Filter } from "./src/_includes/components/Filter.js";
import { Search } from "./src/_includes/components/Search.js";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy("src/fonts/");
  eleventyConfig.addPassthroughCopy("src/images/");

  eleventyConfig.addWatchTarget("src/css/");

  // Components:
  eleventyConfig.addShortcode("Navigation", Navigation);
  eleventyConfig.addShortcode("WebinarOverview", WebinarOverview);
  eleventyConfig.addShortcode("ContouringOverview", ContouringOverview);
  eleventyConfig.addShortcode("Filter", Filter);
  eleventyConfig.addShortcode("Search", Search);
  
  //Fetch data:
  eleventyConfig.addCollection("webinars", function(webinars) {
    return webinars.items;
  });

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  }
};