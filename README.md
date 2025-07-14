## Case PB "Testes Automatizados com Cypress + BDD"

Criei esse reposítorio afim de apresentar como avaliação do case proposto

* Utilizado o framework [Cypress](https://www.cypress.io/) com abordagem BDD (Behavior Driven Development) via Gherkin.

---

## Sobre o projeto

O site [Challenging DOM](https://the-internet.herokuapp.com/challenging_dom) foi utilizado para realizar a automação da interface web.
O site [Users](https://jsonplaceholder.typicode.com/users) foi utilizado para realizar a automação da api.

---

## Tecnologias Utilizadas

- Cypress 14.x
- Cypress-Cucumber-Preprocessor
- Cypress-XPath
- JavaScript
- Gherkin
- VS Code

---

## Estrutura do Projeto

```
PBCASESR/
├── cypress/
│   ├── e2e/
│   │   └── step_definitions/
│   │       ├── api.cy.js
|   |       ├── steps.cy.js
|   |       └── steps.feature
├── package.json
└── README.md
```

---

## Cenário da Interface Web Testado

### Feature: `steps.feature`

```gherkin
Feature: Site Challenging DOM

    Scenario: Acessar o site Challenging DOM
        Given Acessar o site Challenging DOM
        When Clicar nos 3 botões
        Then Clicar nos botões Edit e Delete

```

### Step Definitions: `steps.cy.js`

```javascript
/// <reference types="cypress"/>

import pb_challengingDom from '../../support/pageObjects/pb_challengingDom '

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("Acessar o site Challenging DOM", () => {
    pb_challengingDom.acessPage();
})

When("Clicar nos 3 botões", () => {
    pb_challengingDom.clickButton();
})

Then("Clicar nos botões Edit e Delete", () => {
    pb_challengingDom.columnAction();
    
    pb_challengingDom.buttonEditDelete();
})
```

---

## Como Realizar o clone do Repositório

```bash
git clone git@github.com:KiraOliveira/pbCaseSR.git
cd pbCaseSR
```

---

## Como Executar os Testes

```bash
npm install cypress --save-dev
npm npm install --save-dev cypress cypress-cucumber-preprocessor
npx cypress open ou npx cypress run(heandless)
```

---
