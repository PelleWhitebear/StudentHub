describe('Add appointment to calendar (addAppointment component)', () => {
    it('Visit StudentHub (landing page)', () => {

      // Go to landing page
      cy.visit('https://www.studenthub.bhsi.xyz/')
      //cy.visit('http://localhost:3000/')

      // Should be on landing page
      //cy.url().should('eq', "https://www.studenthub.bhsi.xyz/") 
    })

    // Login with existing user
    it('User can login', () => {

      // Should have 2x InputBox: username- & password button
      cy.get('span').should('have.length', 2)
       
      // Typing in e-mail: s205339@student.dtu.dk
      cy.get('span').first().type('s205339@student.dtu.dk')

      // Typing in password: hej1234
      cy.get('span').last().type('hej1234')

      // Click LoginButton
      cy.get('button').first().click()

      // Should be on /Calendar path
      //cy.url().should('eq', 'https://www.studenthub.bhsi.xyz/Calendar')
    })

    // User can add appointment
    it('User make new appointment', () => {

        // Should be on /Calendar path
        cy.url().should('eq', 'https://www.studenthub.bhsi.xyz/Calendar')

        // Create appointment button
        cy.get('button').first().click()  
        
        // Type in ppointment title
        cy.get('input').eq(6).type("Front end exam")
        
        cy.get('button').eq(7).click()
        
        // Go to may
        cy.get('button').eq(12).click()
        cy.get('button').eq(12).click()
        cy.get('button').eq(12).click()
		
		// Date
        cy.get('button').eq(29).click()
        

        // Start time
        cy.get('input').eq(8).click().type("12:30 pm")
        
        // End time 
        cy.get('input').eq(9).click().type("01:45 pm")

        // Location 
        cy.get('input').eq(10).click().type("Building 322 room 105")

        cy.get("button").contains("Add Appointment").click()




        
        //cy.get('button').eq(44).click()


        /*cy.visit('http://localhost:3000/Calendar')
        cy.contain
        ...*/
    })
    

  })