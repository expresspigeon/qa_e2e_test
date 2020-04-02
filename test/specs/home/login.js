import LoginPage from '../../pageObjects/login.page'
const userName = process.env.USER;

describe('ExpressPigeon login page', () => {

    beforeEach(function () {
        LoginPage.open()
        expect(browser.getTitle()).to.be.equal('Login | ExpressPigeon Email Service');
    })

    // it('bad password', () => {
    //     LoginPage.login(userName, 'test')
    //     LoginPage.alertElement.waitForDisplayed(3000);
    //     expect(LoginPage.alertElement.getText()).to.be.equal('Please enter a correct email and password. Passwords are case-sensitive.');
    //     expect(browser.getUrl()).to.deep.include('/account/login');
    // });
    it('correct data', () => {
        LoginPage.login(userName, 'QlCsS5_Fo#Y3', 'Ghjcnjgfhjkm_12345!')
        expect(browser.getTitle()).to.be.equal('Dashboard | ExpressPigeon');
    });
});
