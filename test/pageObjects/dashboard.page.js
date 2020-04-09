import Page from './page';
import helpers from "../helpers/helpers";
const environmentUrl = process.env.HOST;

class DashboardPage extends Page {

    get menu() { return $(`#site-menu`); }
    get logoutBtn() { return $(`[action='/access/logout']`); }

    open() {
        super.open(environmentUrl);
    }

    allElements() {
        return [
            this.menu,
            this.logoutBtn,
        ]
    }

    logout() {
        this.menu.click()
        this.logoutBtn.click()
    }

}

export default new DashboardPage();
