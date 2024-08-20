import { expect, test } from "@playwright/test";

test("Interaction with inputs", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message")
    console.log('Before entering data: ' + await messageInput.inputValue());
    await messageInput.type("Hi koushik");
    console.log('After entering data: ' + await messageInput.inputValue())
})

test("Checkbox", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    const singleCheckbox = page.locator("id=isAgeSelected")
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();
})