// @ts-check

// Write a test that will:
//  - Visit carVertical
//  - In the VIN form, submit SALLAAA146A396339 VIN
//  - Once precheck has loaded, pick 3-report package
//  - On the checkout page, apply qahomework voucher
//  - Validate that the total price is shown correctly

const { test, expect, chromium } = require('@playwright/test');

test.describe('Verify validations for purchase', async () =>{
  test.setTimeout(100000);
  let browser,context,page;

  test.beforeAll(async () => {
    //Setup browser
    browser = await chromium.launch({
        headless: false,
        /*  proxy: { server: 'ip' }*/
    });
    context = await browser.newContext({

    });
    page = await context.newPage();
  });

  test('should open carvertical.com', async() => {
    await page.goto('https://carvertical.com');
    await page.waitForLoadState('networkidle');

    //Close all popups
    await page.click('button[data-testid="SuggestCorrectMarket-continueButton"]');
    await page.click('button[data-testid="BisquitsBanner-acceptAllButton"]');
  });

  test('should enter VIN and select package', async() => {
    await page.fill('input.IdentifierInput_input__gfgg0 >> nth=0', 'SALLAAA146A396339');
    await page.getByRole('button', { name: 'Get report' }).first().click();  // <- poor selector
    await page.waitForLoadState('networkidle');

    await page.click('form > div > label:nth-child(2)');
    await page.click('form > button[type="submit"]');
    await page.click('[data-testid="GridItem"] >> nth=1');
    await page.getByRole('link', { name: 'Get report' }).click();

    await page.waitForLoadState('networkidle');
    await page.click('a[data-testid="SuggestCorrectMarket-continueButton"]');

    await page.waitForLoadState('networkidle');
    await page.fill('#email', 'lupeika.k@gmail.com');
    await page.locator('label').filter({ hasText: 'I agree to terms and conditions and privacy policy' }).locator('svg').click();
    await page.click('button[data-testid="Checkout-ValidateEmailButton"]');
  });

   test('should login', async() => {
    await page.waitForLoadState('networkidle');
    await page.fill('#password', 'StrongPass123!');
    await page.click('button[type="submit"]');
    await page.waitForLoadState('networkidle');
   });

   test('should apply voucher', async() => {
    //Get price before voucher
    let initValue = await page.locator('[data-testid="Checkout-ReportAmount"]').textContent();
    initValue = parseFloat(initValue.substring(1));
    // console.log(initValue);
    // console.log(typeof initValue);

    //Apply voucher
    await page.reload(); // <----- ??? Cant find 'Add', must be related to frames
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByPlaceholder('Coupon code').fill('qahomework');
    await page.getByRole('button', { name: 'Apply' }).click();

    //Get voucher value
    let voucherValue = await page.locator('[data-testid="Checkout-VoucherRemoveButton"]').textContent();
    voucherValue = parseInt(voucherValue.charAt(1)); // <- percentage
    //console.log(voucherValue);
    //console.log(typeof voucherValue);

    //Calculations
    let finalSum = initValue - (initValue * voucherValue / 100);
    finalSum = Math.round(finalSum * 100) / 100

    //Parse strings + Assertion
    let totalValue = await page.locator('[data-testid="Checkout-TotalAmount"]').textContent();
    totalValue = parseFloat(totalValue.substring(1));
    expect(totalValue).toBe(finalSum);
   });
});