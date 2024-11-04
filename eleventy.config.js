module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("journal.css");
    eleventyConfig.addPassthroughCopy("assets");
  };