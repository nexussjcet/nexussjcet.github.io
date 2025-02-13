/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

// await import("./env.js");
import { withMDX } from "./lib/mdx.js";

/** @type {import("next").NextConfig} */
export default withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
});
