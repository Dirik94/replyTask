// cypress/pages/loginPage.ts
class LoginPage {
    // Define selectors
    private usernameInput = '#login_user';
    private passwordInput = '#login_pass';
    private loginButton = '#login_button';
    private languageSelect = '#login_lang';
    private themeSelect = '#login_theme';
    private rememberMeCheckbox = 'input[type="checkbox"]';
  
    // Define actions
    public visit() {
      cy.visit('/');
    }
  
    public enterUsername(username: string) {
      cy.get(this.usernameInput).type(username);
    }
  
    public enterPassword(password: string) {
      cy.get(this.passwordInput).type(password);
    }

    public chooseLanguage(value: 'en_us') {
        cy.get(this.languageSelect).select(value);
        cy.get(this.languageSelect).should('have.value', value);
    }

    public chooseTheme(value: 'Claro' | 'Delight' | 'Flex' | 'Spectrum') {
        cy.get(this.themeSelect).select(value);
        cy.get(this.themeSelect).should('have.value', value);
    }

    public rememberMeCheckBox(isChecked: boolean){
      isChecked ? cy.get(this.rememberMeCheckbox).check() : cy.get(this.rememberMeCheckbox).uncheck();
      isChecked ? cy.get(this.rememberMeCheckbox).should('be.checked') : cy.get(this.rememberMeCheckbox).should('not.be.checked');
    }
  
    public logginButton_click() {
      cy.get(this.loginButton).click();
    }
  }
  
  export default LoginPage;
  