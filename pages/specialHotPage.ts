import { Page } from "@playwright/test"
export default class SpecialHotPage {
    constructor(public page: Page) {
    }

    async addFirstProductToCart() {
        await this.page.hover("//div[@class='image']/a", {
            strict: false //if multiple matches, it will not fail
        });
        await this.page.locator("//button[@title='Add to Cart']").nth(0).click();
    }

    async isToastVisible() {
        const toast = this.page.locator("//a[.='View Cart ']");
        await toast.waitFor({ state: "visible" });
        return toast;
    }





}