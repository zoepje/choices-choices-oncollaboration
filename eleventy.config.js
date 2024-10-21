import { Navigation } from "./src/_includes/components/Navigation.js";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy("src/fonts/");
  eleventyConfig.addPassthroughCopy("src/images/");

  eleventyConfig.addWatchTarget("src/css/");

  // Components:
  eleventyConfig.addShortcode("link", function (url, svg, label) {
    const isActive = this.page.url === url;
    return `<a ${isActive ? 'class="active"' : ''} href="${url}">${svg} ${label}</a>`;
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