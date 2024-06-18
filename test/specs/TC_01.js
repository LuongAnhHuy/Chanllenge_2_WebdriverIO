const LoginPage = require("../pageobjects/login.page");
const {expect} = require("@wdio/globals");
const SecurePage = require("../pageobjects/secure.page");
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.inputFrom("Hà Nội")
        await LoginPage.inputTo("Hồ Chí Minh")

        browser.execute(() => {
            const elemToRemove = document.querySelector('div.search-form__content__date__input > input[readonly]')
            elemToRemove.removeAttribute('readonly');

        });
        browser.elementClear('#departure_date_flight')
        await LoginPage.inputDateFrom("20/06/2024")

        browser.execute(() => {
            const elemToRemove = document.querySelector('div.search-form__content__date__input > input[readonly]');
            elemToRemove.removeAttribute('readonly');
        });
        browser.elementClear('#returning_date_flight')
        await LoginPage.inputDateTo("30/06/2024")

        await LoginPage.clickToCustomer()

        await LoginPage.clickToChildBtn()
        await LoginPage.clickToTimChuyenBay()
    })
})