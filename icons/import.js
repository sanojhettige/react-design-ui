const fs = require("fs");
const STYLES_PATH = "./src/assets/icons/icons.css";
const style = fs.readFileSync(STYLES_PATH).toString();
fs.writeFileSync(STYLES_PATH, style.replace(/i\[/g,'['))