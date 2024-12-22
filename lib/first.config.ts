import { builders, loadFile, writeFile } from "magicast";

const fileName = "./next.config.js";

const mod = await loadFile(fileName);

console.log("Current Code:\n", mod.$code);

mod.exports.default = {}

await writeFile(mod, fileName);

console.info(`Updated ${fileName} with basic configuration`);