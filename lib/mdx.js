import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeFormat from "rehype-format";
import rehypeHighlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkDirective from "remark-directive";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
// import rehypeRaw from 'rehype-raw'
// import rehypeSanitize from 'rehype-sanitize'
// import remarkPrism from 'remark-prism'
import remarkGithub from "remark-github";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";

import createMDX from "@next/mdx";

const options = {
	repository: "nexussjcet/nexussjcet.github.io",
};

export const withMDX = createMDX({
	options: {
		remarkPlugins: [
			remarkDirective,
			remarkFrontmatter,
			remarkGfm,
			remarkMath,
			remarkParse,
			remarkRehype,
			// [remarkGithub, options],
			// remarkPrism
		],
		rehypePlugins: [
			rehypeFormat,
			rehypeSlug,
			// rehypeRaw,
			// rehypeSanitize,
			rehypeHighlight,
			rehypePrettyCode,
			rehypeStringify,
			rehypeAutolinkHeadings,
		],
	},
});
