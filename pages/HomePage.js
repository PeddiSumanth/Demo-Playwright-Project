import { expect } from '@playwright/test';

export class HomePage {

    constructor(page) {
        this.page = page;
        this.Allproducts = page.locator('.hrefch');
        this.addtocart = page.locator("//a[normalize-space()='Add to cart']");
        this.cartlink = page.locator('#cartur');
    }

    async addproducttocart(productname) {
        // Set up dialog handler BEFORE any action
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toBe('Product added.');
            await dialog.accept();
        });
        
        // Find and click product by role and name
        const productLink = this.page.getByRole('link', { name: productname });
        await productLink.click();
        
        // Wait for Add to cart button to appear on product detail page
        await this.addtocart.waitFor({ state: 'visible', timeout: 10000 });
        
        // Click Add to cart button
        await this.addtocart.click();
        
        // Wait for dialog to be processed
        await this.page.waitForTimeout(1000);
    }

    async goToCart() {
        await this.cartlink.click();
    }
}

