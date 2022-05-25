const VisualpartnerService = require("../../lib/services/VisualpartnerService");
const Reader = require("../../lib/utils/reader");

class VisualpartnerController {
    static getVisualpartners() {
        const visualpartnersList = Reader.readJsonFile("visualpartners.json");
        return VisualpartnerService.getAllStudents(visualpartnersList);
    
    }

    static getEmailsByCertification(certification) {
        const visualpartnersList = Reader.readJsonFile("visualpartners.json");
        return VisualpartnerService.getEmailsByCertification(visualpartnersList, certification);

    }

    /*static getVisualpartnersByMoreThanCredits(credits){
        const visualpartnersList = Reader.readJsonFile("visualpartners.json");
        return VisualpartnerService.getVisualpartnersByMoreThanCredits(visualpartnersList, credits);

    }*/
}
module.exports = VisualpartnerController;
