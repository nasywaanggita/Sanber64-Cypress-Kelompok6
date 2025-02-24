import chooseUpdate from "../../support/page-objects/chooseUpdate";

describe("Choose products and Update Shopping Cart", () => {
  let productData;

  beforeEach(() => {
    cy.fixture('productData').then((data) => {
      productData = data;
    });
    cy.visit(""); 
  });

  it("success choose products, add to shopping cart and success update shopping cart", function() {
    cy.get("#ui-id-3 > span").click();
    cy.get(".base").should("contain.text", productData.categoryText);
    cy.get(".new-main > .content > .info").click();
    cy.get(".base").should("contain.text", productData.productCollection);
    chooseUpdate.selectEcho();
    cy.get(".base").should("contain.text", productData.productName);
    chooseUpdate.selectSize("143-item-171");
    chooseUpdate.selectColor("93-item-49");
    cy.get("#qty").clear().type(3);
    chooseUpdate.addCart();
    cy.get(".showcart > .counter").should("contain.text", 3);
    chooseUpdate.messageSuccess("You added");
    chooseUpdate.clickShowcart();
    chooseUpdate.editShowcart();
    chooseUpdate.selectSize("143-item-172");
    chooseUpdate.selectColor("93-item-50");
    cy.get("#qty").clear().type(1);
    chooseUpdate.updateProduct();
    chooseUpdate.messageSuccess("was updated");
    cy.get(".summary").should("contain.text", "Summary");
  });

  it("failed add to cart because doesn't choose size", function() {
    cy.get("#ui-id-3 > span").click();
    cy.get(".base").should("contain.text", productData.categoryText);
    cy.get(".new-main > .content > .info").click();
    cy.get(".base").should("contain.text", productData.productCollection);
    chooseUpdate.selectEcho();
    cy.get(".base").should("contain.text", productData.productName);
    chooseUpdate.selectColor("93-item-49");
    chooseUpdate.addCart();
    cy.wait(4000);
    chooseUpdate.errorMessage();
  });

  it("failed add to cart because doesn't choose color", function() {
    cy.get("#ui-id-3 > span").click();
    cy.get(".base").should("contain.text", productData.categoryText);
    cy.get(".new-main > .content > .info").click();
    cy.get(".base").should("contain.text", productData.productCollection);
    chooseUpdate.selectEcho();
    cy.get(".base").should("contain.text", productData.productName);
    chooseUpdate.selectSize("143-item-171");
    chooseUpdate.addCart();
    cy.wait(4000);
    chooseUpdate.errorMessage();
  });

  it("success choose products, add to shopping cart but failed update shopping cart because doesn't choose size", function() {
    cy.get("#ui-id-3 > span").click();
    cy.get(".base").should("contain.text", productData.categoryText);
    cy.get(".new-main > .content > .info").click();
    cy.get(".base").should("contain.text", productData.productCollection);
    chooseUpdate.selectEcho();
    cy.get(".base").should("contain.text", productData.productName);
    chooseUpdate.selectSize("143-item-171");
    chooseUpdate.selectColor("93-item-49");
    cy.get("#qty").clear().type(3);
    chooseUpdate.addCart();
    cy.get(".showcart > .counter").should("contain.text", 3);
    chooseUpdate.messageSuccess("You added");
    chooseUpdate.clickShowcart();
    chooseUpdate.editShowcart();
    chooseUpdate.selectSize("143-item-171");
    chooseUpdate.selectColor("93-item-50");
    cy.get("#qty").clear().type(1);
    chooseUpdate.updateProduct();
    cy.wait(4000);
    chooseUpdate.errorMessage();
  });

  it("success choose products, add to shopping cart but failed update shopping cart because doesn't choose color", function() {
    cy.get("#ui-id-3 > span").click();
    cy.get(".base").should("contain.text", productData.categoryText);
    cy.get(".new-main > .content > .info").click();
    cy.get(".base").should("contain.text", productData.productCollection);
    chooseUpdate.selectEcho();
    cy.get(".base").should("contain.text", productData.productName);
    chooseUpdate.selectSize("143-item-171");
    chooseUpdate.selectColor("93-item-49");
    cy.get("#qty").clear().type(3);
    chooseUpdate.addCart();
    cy.get(".showcart > .counter").should("contain.text", 3);
    chooseUpdate.messageSuccess("You added");
    chooseUpdate.clickShowcart();
    chooseUpdate.editShowcart();
    chooseUpdate.selectSize("143-item-172");
    chooseUpdate.selectColor("93-item-49");
    cy.get("#qty").clear().type(1);
    chooseUpdate.updateProduct();
    cy.wait(4000);
    chooseUpdate.errorMessage();
  });
});
