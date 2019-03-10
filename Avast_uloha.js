import { Selector } from 'testcafe';

fixture `EN mutation`
    .page `https://www.avast.com/en-us/lp-business-aff-secureline-45`;

test('1year5pcs', async t => {
    await t.click('label[for="1year5pcs"]');

    //Saving price on the web site
    const price = await Selector('.smb-abox_price_discounted').textContent;
    await t.click('.button.orange');

    //Saving price in cart
    const cartprice = await Selector('.av_streetPrice').textContent;

    //Comparing prices
    await t.expect(price.replace(/\s/g,'')).eql(cartprice.replace(/\s/g,''), 'Prices are not equal.');
});	

fixture `RU mutation`
    .page `https://www.avast.com/ru-ru/lp-business-aff-secureline-45`;

test('1year5pcs', async t => {
    await t.click('label[for="1year5pcs"]');

    //Saving price on the web site
    const price = await Selector('.smb-abox_price_discounted').textContent;
    await t.click('.button.orange');

    //Saving price in cart
    const cartprice = await Selector('.b-price.coupon_AVAST').textContent;

    //Comparing prices  
    await t.expect(parseInt(price.replace(/\s/g,''))).eql(parseInt(cartprice.replace(/\s/g,'')), 'Prices are not equal.');
});	

fixture `PT mutation`
    .page `https://www.avast.com/pt-br/lp-business-aff-secureline-45`;

test('1year5pcs', async t => {
    await t.click('label[for="1year5pcs"]');

    //Saving price on the web site
    const price = await Selector('.smb-abox_price_discounted').textContent;
    await t.click('.button.orange');

    //Saving price in cart
    const cartprice = await Selector('.av_streetPrice').textContent;

    //Comparing prices
    await t.expect(parseInt(price.replace(/\s/g,''))).eql(parseInt(cartprice.replace(/\s/g,'')), 'Prices are not equal.');
});	
		