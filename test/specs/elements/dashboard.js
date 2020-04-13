import DashboardPage from '../../pageObjects/dashboard.page'
import LoginPage from '../../pageObjects/login.page'
const userName = process.env.USER;
const secretName = process.env.SECRET;
const pwdName = process.env.PASSWORD;

describe('Dashboard Page', () => {

    before(function() {
        LoginPage.open()
        LoginPage.login(userName,secretName,pwdName)
        DashboardPage.pageTitle.waitForDisplayed()
    });

    DashboardPage.allElements().forEach(el => {
        it('have all elements', async () => {
            await browser.setTimeout({ 'implicit': 5000 })
            expect(await browser.getTitle()).to.deep.include('Dashboard | ExpressPigeon')
            expect(await (await el).isDisplayed(), (await el).error.message).to.be.true;
        });
    })
});
