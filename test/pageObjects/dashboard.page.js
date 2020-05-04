import Page from './page';
import helpers from "../helpers/helpers";
const environmentUrl = process.env.HOST;

class DashboardPage extends Page {

    get pageTitle() { return $(`#page-title`);}
    get viewCampaignsBtn() { return $(`#view-campaigns-btn`);}
    get editTemplateBtn() { return $(`#edit-templates-btn`);}
    get manageListsBtn() { return $(`#manage-lists-btn`);}
    get viewCampaignsText() { return $(`#view-campaigns-lnk`);}
    get viewTemplatesText() { return $(`#edit-templates-lnk`);}
    get viewListsText() { return $(`#manage-lists-lnk`);}
    get tutorialsBtn() { return $(`#tutorials-btn`)} 
    get blogBtn() { return $(`#blog-btn`)} 
    get closeTutorialModal() {return $(`[type='button'][data-dismiss='modal']`);}
    get backToDashboardBtn() { return $(`[title='back to dashboard']`)} 

    open() {
        super.open('');
    }

    allElements() {
        return [
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
}

export default new DashboardPage();
