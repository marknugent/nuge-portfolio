export default function (eleventyConfig) {
  // Content lives in src/content/ rather than src/_data/ and is imported with a
  // cache-busting query string. Node caches ES modules by path, so a plain
  // _data/*.js file is read once and never re-read — which meant `--serve`
  // silently rebuilt with stale content after every data edit.
  const fresh = (file) => () =>
    import(`./src/content/${file}?v=${Date.now()}`).then((m) => m.default);

  eleventyConfig.addGlobalData("projects", fresh("projects.js"));
  eleventyConfig.addGlobalData("resume", fresh("resume.js"));
  eleventyConfig.addGlobalData("visibleProjects", async () => {
    const all = await import(`./src/content/projects.js?v=${Date.now()}`);
    return all.default.filter((p) => !p.excluded);
  });
  eleventyConfig.addWatchTarget("./src/content/");

  // Static assets carried over from the existing site, unchanged.
  eleventyConfig.addPassthroughCopy({ "images": "images" });
  eleventyConfig.addPassthroughCopy({ "Mark-Nugent-Designer-Resume.pdf": "Mark-Nugent-Designer-Resume.pdf" });
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy({ "favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "favicon-16x16.png": "favicon-16x16.png" });
  eleventyConfig.addPassthroughCopy({ "favicon-32x32.png": "favicon-32x32.png" });
  eleventyConfig.addPassthroughCopy({ "favicon-96x96.png": "favicon-96x96.png" });
  eleventyConfig.addPassthroughCopy({ "robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/_static/htaccess": ".htaccess" });

  // Projects visible in the main list, in list order.
  eleventyConfig.addFilter("visible", (projects) =>
    projects.filter((p) => !p.excluded)
  );
  eleventyConfig.addFilter("tier", (projects, n) =>
    projects.filter((p) => !p.excluded && p.tier === n)
  );

  // The next project in list order, wrapping from the last back to the first.
  eleventyConfig.addFilter("nextAfter", (projects, slug) => {
    const i = projects.findIndex((p) => p.slug === slug);
    return projects[(i + 1) % projects.length];
  });

  // "Five case studies" / "Three projects" counts in the section heads.
  const WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
  eleventyConfig.addFilter("countWord", (n) => WORDS[n] ?? String(n));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
