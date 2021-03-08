module.exports = {
  plugins: [
    ["macros"],
    [
      "@emotion",
      {
        // sourceMap is on by default but source maps are dead code eliminated in production
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: "[local]",
        cssPropOptimization: true,
      },
    ],
  ],
  presets: [
    [
      "babel-preset-gatsby",
      {
        targets: {
          browsers: [">0.25%", "not dead"],
        },
      },
    ],
  ],
}
