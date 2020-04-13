import Page from './page';
import helpers from "../helpers/helpers";
const environmentUrl = process.env.HOST;

class LoginPage extends Page {

    get username() { return $(`#email`); }
    get secret() { return $(`#secret`); }
    get password() { return $(`#pwd`); }
    get submitBtn() { return $(`#login-btn`); }
    get badPasswordMsg() {return $(`[action='/access/process_login'] .parsley-errors-list label`); }

    open() {
        super.open('access/login');
    }

    submit() {
        this.submitBtn.click();
    }

    login(user, secret, pass) {
        this.username.setValue(user)
        this.secret.setValue(secret)
        this.password.setValue(pass)
        this.submit()
    }

}

export default new LoginPage();
