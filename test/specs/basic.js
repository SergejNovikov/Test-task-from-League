import expect from "expect";

describe('Проверка перехода на страницы цен общения в разныз странах в роуминге', () => {
    it('Переход на страницу Белиза', () => {
        browser.url('https://msk.tele2.ru/mobile/roaming')
        let input = $('input.rw-dropdown-list-autofill');
        const div = $('div.rw-input');
        input.setValue('Бел');
        div.click();
        const link = $('#rw_1_listbox_active_option*=Белиз');
        link.click();
        browser.pause(10000);
        const url = browser.getUrl;
        var assert = require('assert');
        const expUrl = 'https://msk.tele2.ru/mobile/roaming/international/belize/camel3?pageParams=shouldScrollToRoamingContent%3Dtrue';
        assert.strictEqual(url, expUrl);
    })
    it('Отображение правильной цены', ()=> {
        const priceOneMb = $('span.info_half').getValue();
        var assert = require('assert');
        assert.strictEqual(priceOneMb, 50);
    })
})