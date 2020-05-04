import MyAccountPage from '../../pageObjects/profile/myAccount.page'
import LoginPage from '../../pageObjects/login.page'
const userName = process.env.USER;
const secretName = process.env.SECRET;
const pwdName = process.env.PASSWORD;

describe('My Account', () => {

    before(function() {
        LoginPage.open();
        LoginPage.login(userName,secretName,pwdName);
        MyAccountPage.open();
        MyAccountPage.email.waitForDisplayed();
    });

    MyAccountPage.allElements().forEach(el => {
        it('have all elements', async () => {
            await browser.setTimeout({ 'implicit': 5000 })
            expect(await browser.getTitle()).to.deep.include('Contact information | ExpressPigeon')
            expect(await (await el).isDisplayed(), (await el).error.message).to.be.true;
        });
    })
});
