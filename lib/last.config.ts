import { builders, loadFile, writeFile } from "magicast";

const fileName = "./next.config.js";

const config = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	output: "export",
};

const mod = await loadFile(fileName);

console.log("Current Code:\n", mod.$code);


let options =
	mod.exports.default.$type === "function-call"
		? mod.exports.default.$args[0]
		: mod.exports.default;

console.log("Current options:", options);

options = {
	...options,
	...config,
};

mod.exports.default = builders.functionCall("withMDX", options);

mod.imports.$prepend({
    from: "./lib/mdx.js",
    imported: "withMDX",
})

await writeFile(mod, fileName);

console.info(`Updated ${fileName} with MDX support`);