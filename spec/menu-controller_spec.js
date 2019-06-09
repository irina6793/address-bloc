const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {
  beforeEach(() => {
    this.menu = new MenuController();
  });

  describe("#remindMe()", () => {
    it("Learning is a life-long pursuit.", () => {
      expect(this.menu.remindMe());
    });
  });
});
