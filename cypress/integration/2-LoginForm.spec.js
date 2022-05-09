
describe('LoginForm component', () => {

    const Email = "s205339@student.dtu.dk";
    const Pwd = "hej1234";

    it('Visit StudentHub (landing page)', () => {

      // Go to landing page
      cy.visit('https://www.studenthub.bhsi.xyz/')

      // Should be on landing page
      cy.url().should('eq', "https://www.studenthub.bhsi.xyz/") 
    })

    // Login with existing user
    it('User can login', () => {

      // Should have 2x InputBox: username- & password button
      cy.get('span').should('have.length', 2)
       
      // Typing in e-mail: s205339@student.dtu.dk
      cy.get('span').first().type(Email)

      // Typing in password: hej1234
      cy.get('span').last().type(Pwd)

      // Click LoginButton
      cy.get('button').first().click()

      // Should be on /Calendar path
      cy.url().should('eq', 'https://www.studenthub.bhsi.xyz/Calendar')
    })
  })

   