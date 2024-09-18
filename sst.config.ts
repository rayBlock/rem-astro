/// <reference path="./.sst/platform/config.d.ts" />
import RemotionLambda from "./src/utils/sst-remotion";

export default $config({
  app(input) {
    return {
      name: "RemotionTang",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: { region: "eu-central-1" },
      },
    };
  },
  async run() {
    const rem = new RemotionLambda("RemotionTest", {
      path: "",
      forceDestroy: true,

      
    });
    new sst.aws.Astro("RemotionTang", {

      // domain: ""
      link: [rem],
      transform: {
        assets: {
          access: "public",
        },
        server: {
          architecture: "arm64",
          nodejs: {
            install: ["sharp"],
          },
        },
      },
    });
  },
});
