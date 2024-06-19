const Homepage = require("../pageobjects/home.page");
const {expect} = require("@wdio/globals");
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await Homepage.open()

        await Homepage.inputFrom("Hà Nội")
        await Homepage.inputTo("Hồ Chí Minh")

        browser.execute(() => {
            const elemToRemove = document.querySelector('div.search-form__content__date__input > input[readonly]')
            elemToRemove.removeAttribute('readonly');

        });
        browser.elementClear('#departure_date_flight')
        await Homepage.inputDateFrom("20/06/2024")

        browser.execute(() => {
            const elemToRemove = document.querySelector('div.search-form__content__date__input > input[readonly]');
            elemToRemove.removeAttribute('readonly');
        });
        browser.elementClear('#returning_date_flight')
        await Homepage.inputDateTo("30/06/2024")

        await Homepage.clickToCustomer()
        await Homepage.clickToChildBtn()
        await Homepage.clickToTimChuyenBay()
        await Homepage.verifyGiaTienHienThi()
    })
})