/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable, promise) => {
    return false
})

// Test case 1 //

describe('Testing feedback 1', () => {
  it('Open "Sample Page Test" Page', () => {
    cy.visit('https://www.globalsqa.com/samplepagetest')
  })

  it('Enter text in the field "Name"', () => {
    cy.fixture('feedback').then(data => {
      cy.get('[name="g2599-name"]').type(data.name)
    })
  })  

  it('Enter text in the field "Email"', () => {
    cy.fixture('feedback').then(data => {
      cy.get('[name="g2599-email"]').type(data.email)
    })
  })
  it('Enter text in the field "Website"', () => {
    cy.fixture('feedback').then(data => {
      cy.get('[name="g2599-website"]').type(data.website)
    })
  })

  it('Choose "Experience (In Years)"', () => {
    cy.get('[name="g2599-experienceinyears"]').select('0-1')
  })

  it('Choose "Expertise"', () => {
    cy.get('[type="checkbox"]').check('Functional Testing')
  })

  it('Choose "Education"', () => {
    cy.get('[type="radio"]').check('Graduate')
  })

  it('Enter text in the field "Comment"', () => {
    cy.fixture('feedback').then(data => {
      cy.get('[name="g2599-comment"]').type(data.tsc1)
    })
  })

  it('Click the "Submit" button', () => {
    cy.get('[type="submit"]').click ()
  })

  it('Form will open in a new page', () => {
    cy.contains('Message Sent')
  })

  it('Сlick the "go back" link', () => {
    cy.get('a[href*="/samplepagetest/?contact-form-hash=7451d6322607909818ec6641508a0315d590839b"]').click()
  })
})

// Test case 2 //

describe('Testing feedback 2', () => {
  it('Open "Sample Page Test" Page', () => {
    cy.visit('https://www.globalsqa.com/samplepagetest')
  })

  it('Enter text in the field "Name"', () => {
    cy.fixture('feedback').then(data => {
      cy.get('[name="g2599-name"]').type(data.name)
    })
  })  

  it('Enter text in the field "Email"', () => {
    cy.fixture('feedback').then(data => {
      cy.get('[name="g2599-email"]').type(data.email)
    })
  })
  it('Enter text in the field "Website"', () => {
    cy.fixture('feedback').then(data => {
      cy.get('[name="g2599-website"]').type(data.website)
    })
  })

  it('Choose "Experience (In Years)"', () => {
    cy.get('[name="g2599-experienceinyears"]').select('1-3')
  })

  it('Choose "Expertise"', () => {
    cy.get('[type="checkbox"]').check('Functional Testing')
    cy.get('[type="checkbox"]').check('Automation Testing')
  })

  it('Choose "Education"', () => {
    cy.get('[type="radio"]').check('Post Graduate')
  })

  it('Enter text in the field "Comment"', () => {
    cy.fixture('feedback').then(data => {
      cy.get('[name="g2599-comment"]').type(data.tsc2)
    })
  })

  it('Click the "Submit" button', () => {
    cy.get('[type="submit"]').click ()
  })

  it('Form will open in a new page', () => {
    cy.contains('Message Sent')
  })

  it('Сlick the "go back" link', () => {
    cy.get('a[href*="/samplepagetest/?contact-form-hash=7451d6322607909818ec6641508a0315d590839b"]').click()
  })
})

// Test case 3 //

describe('Testing feedback 3', () => {
  it('Open "Sample Page Test" Page', () => {
    cy.visit('https://www.globalsqa.com/samplepagetest')
  })

  it('Enter text in the field "Name"', () => {
    cy.fixture('feedback').then(data => {
      cy.get('[name="g2599-name"]').type(data.name)
    })
  })  

  it('Enter text in the field "Email"', () => {
    cy.fixture('feedback').then(data => {
      cy.get('[name="g2599-email"]').type(data.email)
    })
  })
  it('Enter text in the field "Website"', () => {
    cy.fixture('feedback').then(data => {
      cy.get('[name="g2599-website"]').type(data.website)
    })
  })

  it('Choose "Experience (In Years)"', () => {
    cy.get('[name="g2599-experienceinyears"]').select('3-5')
  })

  it('Choose "Expertise"', () => {
    cy.get('[type="checkbox"]').check('Functional Testing')
    cy.get('[type="checkbox"]').check('Automation Testing')
    cy.get('[type="checkbox"]').check('Manual Testing') 
  })

  it('Choose "Education"', () => {
    cy.get('[type="radio"]').check('Other')
  })

  it('Enter text in the field "Comment"', () => {
    cy.fixture('feedback').then(data => {
      cy.get('[name="g2599-comment"]').type(data.tsc3)
    })
  })

  it('Click the "Submit" button', () => {
    cy.get('[type="submit"]').click ()
  })

  it('Form will open in a new page', () => {
    cy.contains('Message Sent')
  })

  it('Сlick the "go back" link', () => {
    cy.get('a[href*="/samplepagetest/?contact-form-hash=7451d6322607909818ec6641508a0315d590839b"]').click()
  })
})