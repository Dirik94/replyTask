import LoginPage from '../pages/loginPage';

export const loginFlow = () => {
    const login = new LoginPage();
    login.visit();
    cy.fixture('userLoginInfo.json').then((user) => {
        login.enterUsername(user.userName);
        login.enterPassword(user.userPassword);
    });
    
    login.logginButton_click();
};
