import Page from './page';
import helpers from "../helpers/helpers";
const environmentUrl = process.env.HOST;

class FooterLinks extends Page {

    get loginLink() { return $(`.main-footer-nav [title='Log in']`); }
    get kbLink() { return $(`.main-footer-nav [href='/kb']`); }
    get intergrationsLink() { return $(`.main-footer-nav [href='/integrations']`);}
    get apiLink() { return $(`.main-footer-nav [href='/kb#api']`);}
    get featuresLink() { return $(`.main-footer-nav [href='/email-marketing-features']`);}
    get pricingLink() { return $(`.main-footer-nav [href='/pricing']`);}
    get termsLink() { return $(`.main-footer-nav [href='/terms']`);}
    get galleryLink() { return $(`.main-footer-nav [href='/gallery']`);}
    get compareLink() { return $(`.main-footer-nav [href='/compare-email-marketing-software']`);}
    get reportAbuseLink() { return $(`.main-footer-nav [href='/abuse']`)} 
    get privacyLink() { return $(`.main-footer-nav [href='/privacy']`)} 
    get contactUsLink() {return $(`.main-footer-nav [href='/contact-us']`);}
    get teamLink() { return $(`.main-footer-nav [href='/about']`)}
    // private footer links
    get privateTermsLink() {return $(`#footer [href='/terms']`);}
    get privateKbLink() {return $(`#footer [href='/kb']`);}
    get privateAbuseLink() {return $(`#footer [href='/abuse']`);}
    get privatePrivacyLink() {return $(`#footer [href='/privacy']`);}
    get privateAPILink() {return $(`#footer [href='/kb#api']`);}
    get privateIntegrationsLink() {return $(`#footer [href='/integrations']`);}
    get privateBlogLink() {return $(`#footer [href='/blog']`);}
    get privateSupportLink() {return $(`#footer [href='/support']`);}

    open() {
        super.open('');
    }

    publicLinks() {
        return [
            this.loginLink,
            this.kbLink,
            this.intergrationsLink,
            this.apiLink,
            this.featuresLink,
            this.pricingLink,
            this.termsLink,
            this.galleryLink,
            this.compareLink,
            this.reportAbuseLink,
            this.privacyLink,
            this.contactUsLink,
            this.teamLink
        ]
    }

    privateLinks() {
        return [
            this.privateTermsLink,
            this.privateKbLink,
            this.privateAbuseLink,
            this.privatePrivacyLink,
            this.privateAPILink,
            this.privateIntegrationsLink,
            this.privateBlogLink,
            this.privateSupportLink
        ]
    }
}

export default new FooterLinks();
