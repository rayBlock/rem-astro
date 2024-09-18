/// <reference path="./.sst/platform/config.d.ts" />
import { RemotionLambda } from "remotion-sst";

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
    const remotion = new RemotionLambda("RemotionTest", {
      path: "",
    });
    new sst.aws.Astro("RemotionTang", {
      // domain: ""
      link: [remotion],
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
