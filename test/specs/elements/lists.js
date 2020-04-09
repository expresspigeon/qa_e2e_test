// import ContactLists from '../../pageObjects/contacts/lists.page'
// import LoginPage from '../../pageObjects/login.page'

// describe('Contact Lists', () => {

//     before(async function() {
//         await LoginPage.getLoggedSession()
//         await ContactLists.open();
//     });

//     ContactLists.allElements().forEach(el => {
//         it('have all elements', async () => {
//             await browser.setTimeout({ 'implicit': 5000 })
//             expect(await browser.getTitle()).to.deep.include('All Contacts | ExpressPigeon')
//             expect(await (await el).isDisplayed(), (await el).error.message).to.be.true;
//         });
//     })
// });
