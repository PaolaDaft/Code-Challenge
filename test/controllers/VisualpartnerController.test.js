const VisualpartnerController = require("../../lib/controllers/VisualpartnerController");

describe("Unit Tests for ExplorerService class", () => {
    test("1) Use the method getVisualpartners()", () => {
        const visualpartners = VisualpartnerController.getVisualpartners();

        expect(visualpartners).toEqual(51);
    });

    test("2) Use the method getEmailsByCertification()jet", () => {
        const visualpartnersList = VisualpartnerController.getEmailsByCertification(true);

        visualpartnersList.forEach(visualpartner => {
            expect(visualpartner.haveCertification).toBe(true);
        });
    });

    test("3) Use the method getVisualpartnersByMoreThanCredits()", () => {
        const visualpartnersList = VisualpartnerController.getVisualpartnersByMoreThanCredits(500);

        visualpartnersList.forEach(visualpartner => {
            expect(visualpartner.credits).toBeGreaterThan(500);
        });
    });    
});