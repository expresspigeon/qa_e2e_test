import Page from '../page';

class ContactLists extends Page {

    get pageTitle() { return $(`.lists h1`); }
    get searchIcon() { return $(`[title='search across all lists'] .cmp-search-a`); }
    get createNewListBtn() { return $(`[href='/lists/new_list']`); }
    get suppressListBtn() {return $(`[href='/contacts/show/suppress_list']`);}

    open() {
        super.open('lists');
    }

    allElements() {
        return [
            this.pageTitle,
            this.searchIcon,
            this.createNewListBtn,
            this.suppressListBtn
        ]
    }

}
export default new ContactLists();