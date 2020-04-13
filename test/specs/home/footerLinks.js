import FooterLinks from '../../pageObjects/footer.page'
import LoginPage from '../../pageObjects/login.page'
import DashboardPage from '../../pageObjects/dashboard.page'
const userName = process.env.USER;
const secretName = process.env.SECRET;
const pwdName = process.env.PASSWORD;
const environmentUrl = process.env.HOST;

describe('Public Site Footer Links', () => {

    beforeEach(function() {
        FooterLinks.open()
    });
    
    it('Login link correctly works ', () => { 
        FooterLinks.loginLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'access/login')
    });
    it('Knowledge Base link correctly works ', () => { 
        FooterLinks.kbLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'kb')
    });
    it('Integrations link correctly works ', () => { 
        FooterLinks.intergrationsLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'integrations')
    });
    it('API link correctly works ', () => { 
        FooterLinks.apiLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'kb#api')
    });
    it('Features link correctly works ', () => { 
        FooterLinks.featuresLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'email-marketing-features')
    });
    it('Pricing link correctly works ', () => { 
        FooterLinks.pricingLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'pricing')
    });
    it('Terms link correctly works ', () => { 
        FooterLinks.termsLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'terms')
    });
    it('Gallery link correctly works ', () => { 
        FooterLinks.galleryLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'gallery')
    });
    it('Compare link correctly works ', () => { 
        FooterLinks.compareLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'compare-email-marketing-software')
    });
    it('Report Abuse link correctly works ', () => { 
        FooterLinks.reportAbuseLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'abuse')
    });
    it('Privacy link correctly works ', () => { 
        FooterLinks.privacyLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'privacy')
    });
    it('Contact Us link correctly works ', () => { 
        FooterLinks.contactUsLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'contact-us')
    });
    it('Team link correctly works ', () => { 
        FooterLinks.teamLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'about')
    });
});

describe('Private Site Footer Links', () => {

    before(function() {
        LoginPage.open()
        LoginPage.login(userName,secretName,pwdName)
    });
    afterEach(function () {
        DashboardPage.open()
    })
    
    it('Terms link correctly works ', () => { 
        FooterLinks.privateTermsLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'terms')
    });
    it('Report Abuse link correctly works ', () => { 
        FooterLinks.privateAbuseLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'abuse')
    });
    it('Privacy link correctly works ', () => { 
        FooterLinks.privatePrivacyLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'privacy')
    });
    it('API link correctly works ', () => { 
        FooterLinks.privateAPILink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'kb#api')
    });
    it('Integrations link correctly works ', () => { 
        FooterLinks.privateIntegrationsLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'integrations')
    });
    it('Blog link correctly works ', () => { 
        FooterLinks.privateBlogLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'blog')
    });
    it('Support link correctly works ', () => { 
        FooterLinks.privateSupportLink.click()
        let objectiveUrl = browser.getUrl();
        expect(objectiveUrl).to.be.equal(environmentUrl+'contact-us')
    });
});