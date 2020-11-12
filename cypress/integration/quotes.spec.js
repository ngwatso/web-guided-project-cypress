// write tests here
describe("Quotes app", () => {
  beforeEach(() => {
    // arbitrary code you want running before your tests start: setup
    cy.visit("http://localhost:1234");
  });
  // here go our tests
  // 'it' is a test
  it("sanity test to make sure tests work", () => {
    // 'expect' is an assertion
    // there can be many assertions per test
    // assertions live inside the 'it' statement
    // assertions should be logically grouped together
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });

  it("the proper elements are showing on the screen", () => {
    cy.get('input[name="text"]').should("exist");
    cy.get('input[name="xxxxx"]').should("not.exist");
    cy.get('input[name="author"]').should("exist");
    cy.get("#submitBtn").should("exist");
    cy.get("#cancelBtn").should("exist");

    cy.contains("Submit Quote");
  });
});
