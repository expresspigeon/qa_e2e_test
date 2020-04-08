import ContactLists from '../../pageObjects/contacts/lists.page'
import LoginPage from '../../pageObjects/login.page'
import moment from 'moment'

describe('Contact Lists', () => {
    let name

    before(async function() {
        await LoginPage.getLoggedSession()       
    });
    it('Lists: Open Page and Click Search Icon', () => {
        ContactLists.open(); 
        ContactLists.pageTitle.waitForDisplayed()
        ContactLists.searchIcon.click()
        browser.pause(60000)
    });
});