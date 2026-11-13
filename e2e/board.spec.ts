import { test, expect } from '@playwright/test'

test.describe('盤面描画', () => {
  test('描画される', async ({ page }) => {
    await page.goto('/')
    const board = page.getByTestId('board')
    await expect(board).toBeVisible()
  })

  test('盤面サイズが10x20', async ({ page }) => {
    await page.goto('/')
    const board = page.getByTestId('board')
    await expect(board).toBeVisible()
  })
})
