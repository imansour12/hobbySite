require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./routes").default;
const Sitemap = require("react-router-sitemap").default;

new Sitemap(router).build("https://www.iyed.tn").save("./public/sitemap.xml");
