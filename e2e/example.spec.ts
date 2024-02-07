import { test, expect } from '@playwright/test'

//Every test looks like this. The string in the function call is the test title - how it is displayed in the test execution and results.
test('should navigate to the explanations page', async ({ page }) => {
  // Start from the index page
  await page.goto('/')
  // Find an element with the text 'Continue' and click on it
  await page.click('text=Continue')
  // The new url should be "/explanations"
  await expect(page).toHaveURL('/explanations')
  // The new page should contain an h1 with the right text
  await expect(page.locator('h1')).toContainText('Let\'s explain a few things...')
})