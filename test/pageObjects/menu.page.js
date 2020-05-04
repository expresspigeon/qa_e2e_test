import Page from './page';
import helpers from "../helpers/helpers";
const environmentUrl = process.env.HOST;

class Menu extends Page {

    get menu() { return $(`#site-menu`); }
    get logoutBtn() { return $(`#sec-menu-logount-btn`); }
    get myAccount() { return $(`#sec-menu-account-lnk`);}
    get billing() { return $(`#sec-menu-billing-lnk`); }
    get transactions() { return $(`#sec-menu-transactions-lnk`); }
    get plans() { return $(`#sec-menu-plans-lnk`);}
    get members() { return $(`#sec-menu-members-lnk`); }
    get notifications() { return $(`#sec-menu-notifications-lnk`); }
    get banner() { return $(`#sec-menu-banner-lnk`); }
    get mergeDefaults() { return $(`#sec-menu-merge-lnk`); }
    get customFields() { return $(`#sec-menu-fields-lnk`); }
    get integrations() { return $(`#sec-menu-integrations-lnk`); }
    get tags() { return $(`#sec-menu-tags-lnk`); }
    get webHooks() { return $(`#sec-menu-webhooks-lnk`); }
    get errorLog() { return $(`#sec-menu-errors-lnk`); }

    open() {
        super.open('');
    }

    allElements() {
        return [
            this.menu,
            this.logoutBtn,
            this.myAccount,
            this.billing,
            this.transactions,
            this.plans,
            this.members,
            this.notifications,
            this.banner,
            this.mergeDefaults,
            this.customFields,
            this.integrations,
            this.tags,
            this.webHooks,
            this.errorLog
        ]
    }

    logout() {
        this.menu.click()
        this.logoutBtn.waitForDisplayed()
        this.logoutBtn.click()
    }

}

export default new Menu();
