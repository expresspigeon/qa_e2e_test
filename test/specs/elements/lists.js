import ContactLists from '../../pageObjects/contacts/lists.page'
import LoginPage from '../../pageObjects/login.page'
const userName = process.env.USER;
const secretName = process.env.SECRET;
const pwdName = process.env.PASSWORD;

describe('Contact Lists', () => {

    before(function() {
        LoginPage.open()
        LoginPage.login(userName,secretName,pwdName)
        ContactLists.open();
        ContactLists.pageTitle.waitForDisplayed()
    });

    ContactLists.allElements().forEach(el => {
        it('have all elements', async () => {
            await browser.setTimeout({ 'implicit': 5000 })
            expect(await browser.getTitle()).to.deep.include('All contacts | ExpressPigeon')
            expect(await (await el).isDisplayed(), (await el).error.message).to.be.true;
        });
    })
});
