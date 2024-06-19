const { $ } = require('@wdio/globals')
const Page = require('./page');

class HomePage extends Page {
    get fromHyperLink (){
        return $('[name="From"]')
    }
    get toHyperLink (){
        return $('[name="To"]')
    }

    listForm(expected){
        return $('//div[@class="list-flight-des"]//ul[@class="clearfix ul-flight-des collapse fade active in flight_from_domestic"]//li//strong[text()="'+expected+'"]')
    }

    listTo(expected){
        return $('//div[@class="list-flight-des"]//ul[@class="clearfix ul-flight-des collapse fade active in flight_to_domestic"]//li//strong[text()="'+expected+'"]')
    }

    get dateFromElement () {
        return $('#departure_date_flight');
    }

    get dateToElement(){
        return $('#returning_date_flight')
    }

    get customer(){
        return $('[for="flight_passenger"]')
    }

    get childBtn(){
        return $('div.popover-content > div >div > div.col-xs-7 >div > span > [class="mktnd_btn_children_adult_plus btn btn-plus btn-plus-1 btn-number"] > i')
    }

    get timChuyenBayBtn(){
        return $('[class="mktnd_btn_flight_search_flight btn btn-orange btn-block btn-orange--mod"]')
    }

    get giaTienLabel(){
        return $('[class="mktnd_btn_flight_book_now radio btn btn-flight-price flight-select btn-sm"]')
    }

    get readonlyAttribute(){
        return $('div.search-form__content__date__input > input[readonly]')
    }

    get ngayDiTextbox(){
        return $('#departure_date_flight')
    }

    async inputFrom (expected) {
        await this.fromHyperLink.click();
        await this.listForm(expected).click();
    }

    async inputTo (expected) {
        await this.toHyperLink.click();
        await this.listTo(expected).click();
    }

    async inputDateFrom (expected) {
        await this.dateFromElement.click();
        await this.dateFromElement.setValue(expected);
    }

    async inputDateTo (expected) {
        await this.dateToElement.click();
        await this.dateToElement.setValue(expected);
    }

    async clickToCustomer () {
        await this.customer.click();
    }

    async clickToChildBtn(){
        await this.childBtn.click();
    }

    async clickToTimChuyenBay(){
        await this.timChuyenBayBtn.click();
    }

    async verifyGiaTienHienThi(){
        await expect(this.giaTienLabel).toBeDisplayed()
    }

    open () {
        return super.open();
    }
}

module.exports = new HomePage();
