describe("Navbar Component", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("http://localhost:5173/");
  });

  it("Sayfa render olduğunda light mode ve ingilizce olmalı", () => {
    cy.contains("button", "TÜRKÇE").should("be.visible");
    cy.get("body").should("not.have.class", "dark");
    cy.contains("DARK MODE").should("be.visible");
  });

  it("Dil geçişleri düzgün sağlanıyor mu", () => {
    cy.contains("button", "TÜRKÇE").click();
    cy.get("button").contains("ENGLISH").should("be.visible");

    cy.contains("button", "ENGLISH").click();
    cy.get("button").contains("TÜRKÇE").should("be.visible");
  });

  it("Karanlık mod geçişi düzgün sağlanıyor mu", () => {
    cy.get('[data-testid="darkMode-toggle"]').should("exist").click({ force: true });
    cy.wait(300);
    cy.contains("LIGHT MODE").should("be.visible");

    cy.get('[data-testid="darkMode-toggle"]').click({ force: true });
    cy.wait(300);
    cy.contains("DARK MODE").should("be.visible");
  });

  it("Dil ve tema değişiklikleri localStorage'de kaydediliyor mu", () => {
    cy.contains("button", "TÜRKÇE").click();
    cy.window().then((window) => {
      const localStorageLang = window.localStorage.getItem('language');
      expect(localStorageLang).to.eq('tr');
    });

    cy.get('[data-testid="darkMode-toggle"]').click({ force: true });
    cy.window().then((window) => {
      const localStorageTheme = window.localStorage.getItem('theme');
      expect(localStorageTheme).to.eq('dark');
    });

    cy.contains("button", "ENGLISH").click();
    cy.get('[data-testid="darkMode-toggle"]').click({ force: true });

    cy.window().then((window) => {
      const localStorageLang = window.localStorage.getItem('language');
      expect(localStorageLang).to.eq('en');
      const localStorageTheme = window.localStorage.getItem('theme');
      expect(localStorageTheme).to.eq('light');
    });
  });

  it("Sayfa yenilendiğinde dil ve tema seçimleri kaydediliyor mu", () => {
    cy.contains("button", "TÜRKÇE").click();
    cy.get("button").contains("ENGLISH").should("be.visible");

    cy.get('[data-testid="darkMode-toggle"]').click({ force: true });
    cy.wait(300);
    cy.contains("LIGHT MODE").should("be.visible");

    cy.reload();

    cy.window().then((window) => {
      const localStorageLang = window.localStorage.getItem('language');
      expect(localStorageLang).to.eq('tr');
      const localStorageTheme = window.localStorage.getItem('theme');
      expect(localStorageTheme).to.eq('dark');
    });

    cy.contains("button", "ENGLISH").should("be.visible");
    cy.contains("LIGHT MODE").should("be.visible");
  });

});
