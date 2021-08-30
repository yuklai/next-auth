import { PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
  webServer: {
    command: "BROWSER=none npm run dev",
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  testDir: "./providers",
}

export default config
