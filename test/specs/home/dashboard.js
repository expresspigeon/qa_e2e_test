import LoginPage from '../../pageObjects/login.page'
import DashboardPage from '../../pageObjects/dashboard.page'
const userName = process.env.USER;
const secretName = process.env.SECRET;
const pwdName = process.env.PASSWORD;
const environmentUrl = process.env.HOST;

describe('Dashboard', () => {
    let name

    before(function() {
        LoginPage.open()
        LoginPage.login(userName,secretName,pwdName)
    });
    after(function () {
        DashboardPage.logout()
    })
    it('View campaigns button correctly works ', () => { 
        DashboardPage.viewCampaignsBtn.waitForDisplayed()
        DashboardPage.viewCampaignsBtn.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'campaigns')
    });
    it('Edit Templates button correctly works ', () => { 
        DashboardPage.open()
        DashboardPage.editTemplateBtn.waitForDisplayed()
        DashboardPage.editTemplateBtn.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'templates')
    });
    it('Manage Lists button correctly works ', () => { 
        DashboardPage.open()
        DashboardPage.manageListsBtn.waitForDisplayed()
        DashboardPage.manageListsBtn.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'lists')
    });
    it('Tutorials button correctly works ', () => { 
        DashboardPage.open()
        DashboardPage.tutorialsBtn.waitForDisplayed()
        DashboardPage.tutorialsBtn.click()
        DashboardPage.closeTutorialModal.waitForDisplayed()
        DashboardPage.closeTutorialModal.click()
        browser.waitUntil(() => {
           return DashboardPage.closeTutorialModal.isDisplayed() !== true
        });
    });
    it('Blog button correctly works ', () => { 
        DashboardPage.open()
        DashboardPage.blogBtn.waitForDisplayed()
        DashboardPage.blogBtn.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'blog')
        DashboardPage.backToDashboardBtn.click()
    });
});