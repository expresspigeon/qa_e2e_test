import LoginPage from '../../pageObjects/login.page'
const userName = process.env.USER;

describe('ExpressPigeon login page', () => {

    beforeEach(function () {
        LoginPage.open()
        expect(browser.getTitle()).to.be.equal('Login | ExpressPigeon Email Service');
    })

    it('bad password', () => {
        LoginPage.login(userName, 'QlCsS5_Fo#Y3', 'Ghjcnjgfhjkm_123456!')
        LoginPage.badPasswordMsg.waitForDisplayed(3000);
        expect(LoginPage.badPasswordMsg.getText()).to.be.equal('Invalid login credentials, please try again');
        expect(browser.getUrl()).to.deep.include('/access/login');
    });
});
