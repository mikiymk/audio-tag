/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-unused-modules */

import { defineConfig } from "vitest/config";

const config = defineConfig({
  test: {
    environment: "happy-dom",
    isolate: false,
    reporters: ["verbose"],
  },
});

export default config;
