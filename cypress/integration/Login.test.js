

describe('LoginForm component', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false})





    it('Visit StudentHub (landing page)', () => {

      // Go to landing page
      cy.visit('https://www.studenthub.bhsi.xyz/')
    })

    // Login with existing user
    it('User can login', () => {

      // 2x InputBox: username & password
      cy.get('span').should('have.length', 2)
       
      // E-mail: s205353@student.dtu.dk
      cy.get('span').first().type('s205353@student.dtu.dk')

      // Password: test1234
      cy.get('span').last().type('test1234')

      // Click LoginButton, and go to /Calendar
      cy.get('button').first().click()
    })


    /*it('User can go to /CreateUser', () => {
      //cy.get('form').click()
    })*/


  })

   