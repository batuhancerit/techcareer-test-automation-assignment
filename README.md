
# Techcareer Test Automation Assignment

I created a simple project using Cypress, the Page Object Model (POM), and an HTML reporter with the knowledge I gained from the TechCareer Test Automation Workshop



## Setup

```bash 
  git clone https://github.com/batuhancerit/cypress-test-automation-project.git

```

```bash 
  cd cypress-test-automation-project

```

```bash 
  npm install
```

## Running Tests
```bash 
  npx cypress open 
```
  will open the cypress test runner so you can run the tests from it

```bash 
  npx cypress run
```
 will run all the test spec files located within cypress/e2e folder. By default test are run in headless mode on electron browser.
    

### Terminal output shows the results summary as:

![Example Screenshot](cypress/reports/html/cypressConsole.PNG)
![mochawesome](cypress/reports/html/cypressReport.PNG)
