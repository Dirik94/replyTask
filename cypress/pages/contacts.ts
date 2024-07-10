class Contacts {
    // Define selectors
    private shortcutsMenu = 'div[id="sidebar-shortcuts"]';
    private contactShortcut = 'Create Contact';
    private saltatiation = 'div[aria-label="salutation"]';
    private firstNameInput = 'input[aria-label="First Name"]';
    private lastNameInput = 'input[aria-label="Last Name"]';
    private categorySelect = 'div[id="DetailFormcategories-input"]';
    private inputSearch = '#DetailFormcategories-input-search';
    private searchBar = '.input-text';
    private saveButton = '#DetailForm_save-label';

    public createContactButton_click() {
        cy.contains(this.contactShortcut).click();
    }

    public addSlautation(title: 'Mr.' | 'Ms.' | 'Mrs.' | 'Dr.' | 'Prof.'){
        cy.get(this.saltatiation).click();
        cy.contains(title).click();
    }

    public addFistName(name: string): void {
        cy.get(this.firstNameInput).type(name);
    }

    public addLastName(name: string): void {
        cy.get(this.lastNameInput).type(name);
    }

    public addCategory(categories: []): void {
        categories.forEach(element => {
            cy.get(this.categorySelect).click();
            cy.get(this.inputSearch).find(this.searchBar).clear();
            cy.get(this.inputSearch).find(this.searchBar).type(element);
            cy.contains(element).click();
            cy.waitForNetworkIdle(1000);
        });
    }

    public saveButton_click(): void {
        cy.get(this.saveButton).click();
    }

    public verifyUserData(firstName: string, lastName: string, title: string, categories: []): void {
        cy.contains(firstName).should('be.visible');
        cy.contains(lastName).should('be.visible');
        cy.contains(title).should('be.visible');
        categories.forEach(element => {
            cy.contains(element).should('be.visible');
        });
    }
}

export default Contacts;