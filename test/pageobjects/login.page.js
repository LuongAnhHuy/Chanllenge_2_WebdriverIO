const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    //
    get fromHyperLink (){
        //return driver.findElement('xpath', '//input[@name="From"]')
        return $('[name="From"]')
    }
    get toHyperLink (){
        //driver.findElement('xpath','//input[@name="To"]')
        return $('[name="From"]')
    }
    async inputFrom (expected) {
        await this.fromHyperLink.click();
        await this.listForm(expected).click();
    }

    async inputTo (expected) {
        await this.toHyperLink.click();
        await this.listTo(expected).click();
    }

    listForm(expected){
        //driver.findElement('xpath','//div[@class="list-flight-des"]//ul[@class="clearfix ul-flight-des collapse fade active in flight_from_domestic"]//li//strong[text()="'+expected+'"]')
        return $('//div[@class="list-flight-des"]//ul[@class="clearfix ul-flight-des collapse fade active in flight_from_domestic"]//li//strong[text()="'+expected+'"]')
    }

    listTo(expected){
        //driver.findElement('xpath','//div[@class="list-flight-des"]//ul[@class="clearfix ul-flight-des collapse fade active in flight_from_domestic"]//li//strong[text()="'+expected+'"]')
        return $('//div[@class="list-flight-des"]//ul[@class="clearfix ul-flight-des collapse fade active in flight_to_domestic"]//li//strong[text()="'+expected+'"]')
    }
    get dateFromElement () {
        return $('#departure_date_flight');
    }
    async inputDateFrom (expected) {
        await this.dateFromElement.click();
        await this.dateFromElement.setValue(expected);
    }

    get dateToElement(){
        return $('#returning_date_flight')
    }
    async inputDateTo (expected) {
        await this.dateToElement.click();
        await this.dateToElement.setValue(expected);
    }

    get customer(){
        return $('[for="flight_passenger"]')
    }
    async clickToCustomer () {
        await this.customer.click();
    }

    get childBtn(){
        return $('[class=\'mktnd_btn_children_adult_plus btn btn-plus btn-plus-1 btn-number\'] >i')
    }
    async clickToChildBtn(){
        await this.childBtn.click();
    }

//

    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
