const path = require("path");

const PUBLIC_URL = process.env.PUBLIC_URL || "/";

module.exports = {
  getAssetPath: (filename) => path.join(PUBLIC_URL, filename),
};
