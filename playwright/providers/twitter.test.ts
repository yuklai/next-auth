import { test, expect } from "@playwright/test"

test("basic test", async ({ page }) => {
  await page.goto("/")
  await page.click("text=Sign in")
  await page.click("text=Sign in with Twitter")

  await page.waitForSelector(
    "text=Authorise NextAuth.js to access your account?"
  )

  await page.type("#username_or_email", "NextAuthTest")
  await page.type("#password", "d8mb61m3")

  await page.click("text=Sign in")
  await page.pause()
})
