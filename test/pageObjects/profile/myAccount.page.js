import Page from '../page';

class MyAccountPage extends Page {

    get email() { return $(`#email`);}
    get firstName() { return $(`#first-name`);}
    get lastName() { return $(`#last-name`);}
    get phoneNumber() { return $(`#phone-number`);}
    get organization() { return $(`#organization`);}
    get address1() { return $(`#address1`);}
    get address2() { return $(`#address2`);}
    get city() { return $(`#city`)} 
    get state() { return $(`#state`)} 
    get zip() {return $(`#zip`);}
    get countryDropdown() { return $(`[data-id='country']`);} 
    get timeZone() { return $(`[data-id='time_zone']`);} 
    get language() { return $(`[data-id='language']`);}
    get website() { return $(`#website`);} 
    get saveBtn() { return $(`[type='submit']`);}
    get password() { return $(`#pwd_input`);}
    get confirmPassword() { return $(`#pwd_confirm_input`);}
    get resetPasswordBtn() { return $(`[title='set your password to a new value']`);}
    get updateSuccessMsg() { return $(`.toast-success`);}

    // requried fields warnings
    get firstNameMsg() { return $(`#parsley-id-6`);}
    get lastNameMsg() { return $(`#parsley-id-8`);}
    get phoneMsg() { return $(`#parsley-id-10`);}
    get addressMsg() { return $(`#parsley-id-14`);}
    get cityMsg() { return $(`#parsley-id-18`);}
    get stateMsg() { return $(`#parsley-id-20`);}
    get zipMsg() { return $(`#parsley-id-22`);}

    open() {
        super.open('my_account');
    }

    allElements() {
        return [
            this.email,
            this.firstName,
            this.lastName,
            this.phoneNumber,
            this.organization,
            this.address1,
            this.address2,
            this.city,
            this.state,
            this.zip,
            this.countryDropdown,
            this.timeZone,
            this.language,
            this.website,
            this.saveBtn,
            this.password,
            this.confirmPassword,
            this.resetPasswordBtn
        ]
    }
}

export default new MyAccountPage();
