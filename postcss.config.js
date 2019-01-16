const autoPrefixer = require("autoprefixer");

module.exports = ({ file, options, env }) => {
  return {
    plugins: {
      autoPrefixer,
    },
  };
};
