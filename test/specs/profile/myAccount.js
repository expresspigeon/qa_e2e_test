import LoginPage from '../../pageObjects/login.page'
import MyAccountPage from '../../pageObjects/profile/myAccount.page'
import Menu from '../../pageObjects/menu.page'
import helpers from '../../helpers/helpers'
const userName = process.env.USER;
const secretName = process.env.SECRET;
const pwdName = process.env.PASSWORD;
const environmentUrl = process.env.HOST;

describe('My Account', () => {

    let newFirstName
    let newLastName
    let newPhone
    let newOrganization
    let newAddress1
    let newAddress2
    let newCity
    let newState
    let newZip
    let newWebSite
    

    before(function() {
        LoginPage.open()
        LoginPage.login(userName,secretName,pwdName)
    });
    after(function () {
        Menu.logout()
    })
    it('Check mandatory fields validation', () => { 
        MyAccountPage.open()
        MyAccountPage.email.waitForDisplayed()
        MyAccountPage.firstName.clearValue()
        expect(MyAccountPage.firstNameMsg.getText()).to.be.equal('This value is required.')
        MyAccountPage.lastName.clearValue()
        expect(MyAccountPage.lastNameMsg.getText()).to.be.equal('This value is required.')
        MyAccountPage.phoneNumber.clearValue()
        expect(MyAccountPage.phoneMsg.getText()).to.be.equal('This value is required.')
        MyAccountPage.address1.clearValue()
        expect(MyAccountPage.addressMsg.getText()).to.be.equal('This value is required.')
        MyAccountPage.city.clearValue()
        expect(MyAccountPage.cityMsg.getText()).to.be.equal('This value is required.')
        MyAccountPage.state.clearValue()
        expect(MyAccountPage.stateMsg.getText()).to.be.equal('This value is required.')
        MyAccountPage.zip.clearValue()
        expect(MyAccountPage.zipMsg.getText()).to.be.equal('This value is required.')
    });
    it('can update personal data', () => { 
        // generate random data
        newFirstName = helpers.randomCode(10)
        newLastName = helpers.randomCode(10)
        newPhone = helpers.randomCode(16)
        newOrganization = helpers.randomCode(10)
        newAddress1 = helpers.randomCode(30)
        newAddress2 = helpers.randomCode(35)
        newCity = helpers.randomCode(10)
        newState = helpers.randomCode(2)
        newZip = helpers.randomCode(5)
        newWebSite = helpers.randomCode(10)
        // Set values
        MyAccountPage.open()
        MyAccountPage.email.waitForDisplayed()
        MyAccountPage.firstName.setValue(newFirstName)
        MyAccountPage.lastName.setValue(newLastName)
        MyAccountPage.phoneNumber.setValue(newPhone)
        MyAccountPage.organization.setValue(newOrganization)
        MyAccountPage.address1.setValue(newAddress1)
        MyAccountPage.address2.setValue(newAddress2)
        MyAccountPage.city.setValue(newCity)
        let valueLength = MyAccountPage.state.getValue().length
        let backSpaces = new Array(valueLength).fill('Backspace')
        MyAccountPage.state.setValue(backSpaces)
        MyAccountPage.state.setValue(newState)
        MyAccountPage.zip.setValue(newZip)
        MyAccountPage.website.setValue(newWebSite)
        // Click save  and confirmed new values were saved
        MyAccountPage.saveBtn.click()
        MyAccountPage.email.waitForDisplayed()
        expect(MyAccountPage.firstName.getValue()).to.be.equal(newFirstName)
        expect(MyAccountPage.lastName.getValue()).to.be.equal(newLastName)
        expect(MyAccountPage.phoneNumber.getValue()).to.be.equal(newPhone)
        expect(MyAccountPage.organization.getValue()).to.be.equal(newOrganization)
        expect(MyAccountPage.address1.getValue()).to.be.equal(newAddress1)
        expect(MyAccountPage.address2.getValue()).to.be.equal(newAddress2)
        expect(MyAccountPage.city.getValue()).to.be.equal(newCity)
        expect(MyAccountPage.state.getValue()).to.be.equal(newState)
        expect(MyAccountPage.zip.getValue()).to.be.equal(newZip)
        expect(MyAccountPage.website.getValue()).to.be.equal(newWebSite)
    });
    it('can change password', () => { 
        MyAccountPage.open()
        MyAccountPage.email.waitForDisplayed()
        MyAccountPage.password.setValue('Ghjcnjgfhjkm_12345!')
        MyAccountPage.confirmPassword.setValue('Ghjcnjgfhjkm_12345!')
        MyAccountPage.resetPasswordBtn.click()
        MyAccountPage.updateSuccessMsg.waitForDisplayed()
        expect(MyAccountPage.updateSuccessMsg.getText()).to.be.equal('×\nYour password has been reset. Please make a note of it.')
    });
});