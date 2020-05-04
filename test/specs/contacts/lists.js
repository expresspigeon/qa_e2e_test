import ContactLists from '../../pageObjects/contacts/lists.page'
import LoginPage from '../../pageObjects/login.page'
import Menu from '../../pageObjects/menu.page'
const userName = process.env.USER;
const secretName = process.env.SECRET;
const pwdName = process.env.PASSWORD;
//import moment from 'moment'

describe('Contact Lists', () => {
    let name

    before(function() {
        LoginPage.open()
        LoginPage.login(userName,secretName,pwdName)
    });
    after(function () {
        Menu.logout()
    })
    it('Lists: Open Page and Click Search Icon', () => {
        ContactLists.open(); 
        ContactLists.pageTitle.waitForDisplayed()
        ContactLists.searchIcon.click()
    });
    it('Lists: Create new list', () => {
        ContactLists.open(); 
        ContactLists.pageTitle.waitForDisplayed()
        ContactLists.createNewListBtn.click()
    });
});