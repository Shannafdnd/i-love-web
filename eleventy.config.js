import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("journal.css");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addPlugin(syntaxHighlight);
};