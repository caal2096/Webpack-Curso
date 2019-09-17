const path = require("path");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    contacto: path.resolve(__dirname, "src/js/contacto.js"),
    precio: path.resolve(__dirname, "src/js/precio.js")
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  }
};
