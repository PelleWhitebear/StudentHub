
describe('Add appointment to calendar (addAppointment component)', () => {

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
        
        /*// Go to may
        cy.get('button').eq(12).click()
        cy.get('button').eq(12).click()
        cy.get('button').eq(12).click()*/
		
		  // Date
      cy.get('button').eq(25).click()
        
      // Start time
      cy.get('input').eq(8).click().type("12:30 pm")
        
      // End time 
      cy.get('input').eq(9).click().type("01:45 pm")

      // Location 
      cy.get('input').eq(10).click().type("Building 322, room 105")

      // Add the appointment
      cy.get("button").contains("Add Appointment").click()
    })

    // Check if /Calendar contain new appointment
    it('Check if appointment added to calendar', () => {
      
      // Reload React app
      cy.reload()

      // Wait time (in milliseconds)
      cy.wait(5000)

      // Login again
      cy.get('span').should('have.length', 2)
      cy.get('span').first().type(Email)
      cy.get('span').last().type(Pwd)
      cy.get('button').first().click()

      // Month view
      cy.get('div').contains("Week").click()
      cy.get('div').contains("Month").click()      

      // Appointment contain "Front end exam"
      // cy.get('div').contains("Front end exam")
    })
  })