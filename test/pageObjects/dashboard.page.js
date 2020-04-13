import Page from './page';
import helpers from "../helpers/helpers";
const environmentUrl = process.env.HOST;

class DashboardPage extends Page {

    get menu() { return $(`#site-menu`); }
    get logoutBtn() { return $(`[action='/access/logout']`); }
    get pageTitle() { return $(`.dashboard h1`);}
    get viewCampaignsBtn() { return $(`.btn[href='/campaigns']`);}
    get editTemplateBtn() { return $(`.btn[href='/templates']`);}
    get manageListsBtn() { return $(`.btn[href='/lists']`);}
    get viewCampaignsText() { return $(`h4 [href='/campaigns']`);}
    get viewTemplatesText() { return $(`h4 [href='/templates']`);}
    get viewListsText() { return $(`h4 [href='/lists']`);}
    get tutorialsBtn() { return $(`.btn[data-toggle='modal']`)} 
    get blogBtn() { return $(`.btn[href='/blog']`)} 
    get closeTutorialModal() {return $(`[type='button'][data-dismiss='modal']`);}
    get backToDashboardBtn() { return $(`[title='back to dashboard']`)} 

    open() {
        super.open('');
    }

    allElements() {
        return [
            this.pageTitle,
            this.viewCampaignsBtn,
            this.editTemplateBtn,
            this.manageListsBtn,
            this.viewCampaignsText,
            this.viewTemplatesText,
            this.viewListsText,
            this.tutorialsBtn,
            this.blogBtn
        ]
    }

    logout() {
        this.menu.click()
        this.logoutBtn.waitForDisplayed()
        this.logoutBtn.click()
    }

}

export default new DashboardPage();
