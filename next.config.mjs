import { paraglide } from "@inlang/paraglide-js-adapter-next/plugin";

export default paraglide({
  paraglide: {
    project: "./project.inlang", //the path to the Inlang project
    outdir: "./src/paraglide", // where you want the generated files to go
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
});
