import { Navigation } from "./src/_includes/components/Navigation.js";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy("src/fonts/");
  eleventyConfig.addPassthroughCopy("src/images/");

  eleventyConfig.addWatchTarget("src/css/");

  // Components:
  eleventyConfig.addShortcode("link", function (url, path, label) {
    const isActive = this.page.url === url;
    return `<a ${isActive ? 'class="active"' : ''} href="${url}">
    <svg class='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">${path}</svg> ${label}</a>`;
  });
  eleventyConfig.addShortcode("navigation", Navigation);
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