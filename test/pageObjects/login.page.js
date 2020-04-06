import Page from './page';
import helpers from "../helpers/helpers";
//import HomePage from './home/home.page'
const environmentUrl = process.env.HOST;

class LoginPage extends Page {

    get username() { return $(`[type='text'][name='email']`); }
    get secret() { return $(`[type='text'][name='secret']`); }
    get password() { return $(`[type='password'][name='password']`); }
    get submitBtn() { return $(`button[title='Login']`); }
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

    async getLoggedSession(user)  {
        let Cookie
        await browser.url(environmentUrl);
        var res;
        res = await helpers.getLoginSession(user);
        var resCookie = res.headers['set-cookie'].pop().split(';')[0];
        Cookie  = resCookie.slice(10)
        res.should.have.status(302);
        await browser.deleteCookies('JSESSIONID')
        await browser.execute(
            setCookie => document.cookie='JSESSIONID='+setCookie, Cookie
        );
        await browser.url(environmentUrl);
    }

}

export default new LoginPage();
