class ChooseUpdate {
  select_echo =
    ":nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo";
  add_cart = "#product-addtocart-button";
  click_showcart = ".showcart";
  edit_showcart = ".product-item-details > .actions > .primary > .action";
  update_button = "#product-updatecart-button > span";
  message_success = ".message-success > div";
  base = ".base";
  error = ".mage-error";

  selectEcho() {
    cy.get(this.select_echo).click();
  }
  addCart() {
    cy.get(this.add_cart).click();
  }
  clickShowcart() {
    cy.get(this.click_showcart).click();
  }
  editShowcart() {
    cy.get(this.edit_showcart).click();
  }
  updateProduct() {
    cy.get(this.update_button).click();
  }
  messageSuccess(success) {
    cy.get(this.message_success).should("contain.text", success);
  }
  baseText(text) {
    cy.get(this.base).should("contain.text", text);
  }
  errorMessage() {
    cy.get(this.error).should("be.visible");
  }
  selectSize(size) {
    cy.get(`#option-label-size-${size}`).click();
  }
  selectColor(color) {
    cy.get(`#option-label-color-${color}`).click();
  }
}
export default new ChooseUpdate();
