
    describe('CreateUserForm component', () => {

        // New user
        const Email = "s205339@student.dtu.dk";
        const Pwd = "hej1234";

        it('Visit StudentHub (landing page)', () => {
          cy.visit('https://www.studenthub.bhsi.xyz/')
          cy.url().should('eq', "https://www.studenthub.bhsi.xyz/") 
        })
    
        it('User can go to /createUser path', () => {
    
          // Should have 2x button: Login- & create user button
          cy.get('button').should('have.length', 2)
    
          // Click CreateUserButton, and go to /CreateUser
          cy.get('button').last().click()
        })

        it('User can create new user', () => {

          // Should be on /CreateUser path
          cy.url().should('eq', "https://www.studenthub.bhsi.xyz/CreateUser")

          // Should have 5x InputBox
          cy.get('span').should('have.length', 5)

          // Typing in e-mail: s205339@student.dtu.dk
          cy.get('span').first().type(Email)

          // Typing in first name: Pelle
          cy.get('span').eq(1).type('Pelle')

          // Typing in last name: Andersen
          cy.get('span').eq(2).type('Andersen')

          // Typing in password: hej1234
          cy.get('span').eq(3).type(Pwd)

          // Typing in password again: hej1234
          cy.get('span').last().type(Pwd)

          // Should have button
          cy.get('button').should('have.length', 1)

          // Click create user button and go to /Calendar
          cy.get('button').click()
        })

        // Login with new user
        it('User can login with new user', () => {

          cy.visit('https://www.studenthub.bhsi.xyz/')
          cy.url().should('eq', "https://www.studenthub.bhsi.xyz/")

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