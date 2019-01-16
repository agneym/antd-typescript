const presets = [
  "@babel/env",
  "@babel/preset-react",
  [
    "@babel/preset-typescript",
    {
      isTsx: true,
    },
  ],
];

const plugins = [
  "@babel/plugin-proposal-object-rest-spread",
  "@babel/plugin-proposal-class-properties",
  [
    "babel-plugin-import",
    {
      libraryName: "antd",
      style: true,
    },
  ],
];

module.exports = { presets, plugins };
