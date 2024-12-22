/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

// await import("./env.js");
import { withMDX } from "./lib/mdx.js";

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },

    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

};

export default withMDX(config)