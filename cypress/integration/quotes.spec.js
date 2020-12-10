// write tests here
describe("These are sample tests", () => {
	it("Renders our page to the screen", () => {
		// ! Load page onto screen
		cy.visit("http://localhost:1234");
	});
	it("Makes a simple assertion", () => {
		// ! Assertion
		// ! Not good idea to use class or id for testing
		// ! Best convention - [data-cy=<tag>] (Added to element in Form.js)
		cy.get("[data-cy=test-input]").should("exist");
		cy.get(".fake-class").should("not.exist");
	});
});

describe("Filling out and cancelling inputs", () => {
	// ! Reload page before each test is run
	beforeEach(() => {
		cy.visit("http://localhost:1234");
	});

	it("Can navigate to the proper site", () => {
		// ! Good for checking Routes
		cy.url().should("include", "localhost");
	});

	it("Can type in the inputs", () => {
		cy.get("[data-cy=test-input]")
			.should("have.value", "")
			.type(
				"You miss 100% of the shots you don't take - Wayne Gretzky"
			)
			.should(
				"have.value",
				"You miss 100% of the shots you don't take - Wayne Gretzky"
			);

		cy.get('[name="author"]')
			.should("have.value", "")
			.type("Michael Scott")
			.should("have.value", "Michael Scott");
	});
	// ! DON'T USE 'TEST' WHEN NAMING TESTS!!
	it("The submit button is disabled until both inputs are filled in", () => {
		cy.get("#submitBtn").should("be.disabled");

		cy.get("[data-cy=test-input]")
			.should("have.value", "")
			.type(
				"You miss 100% of the shots you don't take - Wayne Gretzky"
			)
			.should(
				"have.value",
				"You miss 100% of the shots you don't take - Wayne Gretzky"
			);

		cy.get('[name="author"]')
			.type("Michael Scott")
			.should("have.value", "Michael Scott");

		cy.get("#submitBtn").should("not.be.disabled");
	});
});

describe("Adding a new quote", () => {
	beforeEach(() => {
		cy.visit("http://localhost:1234");
	});
	it("Can submit and delete a new quote", () => {
		cy.get("[data-cy=test-input]").type("Fourty-two");
		cy.get('[name="author"]').type("Deep Thought");
		cy.get("#submitBtn").click();

		cy.contains(/Fourty-two/i); //! << Regular Expression - checks for upper or lower case
		cy.contains(/fourty-two/i)
			.siblings("[data-cy=deleteBtn3]")
			.click(0);
	});
});

// ! npx cypress run --spec "cypress/integration/quotes.spec.js" => Run cypress in terminal instead of GUI
