import { loginFlow } from "../flows/login.spec";
import Contacts from "../pages/contacts";
describe('user tests', () => {
    const contacts = new Contacts();

    it('create contract', () => {
      loginFlow();
      cy.waitForNetworkIdle(5000);
      cy.verifyPage('Home');
      cy.visit('/' + '?module=Contacts&action=index');
      contacts.createContactButton_click();
      cy.fixture('userData.json').then((user) => {
        contacts.addFistName(user.firstName);
        contacts.addLastName(user.lastName);
        contacts.addSlautation(user.title);
        contacts.addCategory(user.categories);
        contacts.saveButton_click();
        cy.waitForNetworkIdle(5000);
        cy.verifyPage('DetailView');
        contacts.verifyUserData(user.firstName, user.lastName, user.title, user.categories) // there is error in applaction
      });
    });

    it('run report', () => {
      loginFlow();
      cy.waitForNetworkIdle(5000);
      cy.verifyPage('Home');
      cy.visit('/' + '?module=Reports&action=index');
    });
  });
  