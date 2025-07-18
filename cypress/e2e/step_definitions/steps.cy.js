/// <reference types="cypress"/>

import pb_challengingDom from "../../support/pageObjects/pb_challengingDom ";

import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given("Acessar o site Challenging DOM", () => {
  pb_challengingDom.acessPage();
});

When("Clicar nos 3 botões", () => {
  pb_challengingDom.clickButton();
});

And("Clicar nos botões Edit e Delete", () => {
  pb_challengingDom.columnAction();

  pb_challengingDom.buttonEditDelete();
});

Then("Todas as ações devem ser realizadas", () => {
  pb_challengingDom.screen();
})
