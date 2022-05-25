class VisualpartnerService {

    static getAllStudents(visualpartners){
        return visualpartners;
    }

    static getEmailsByCertification(visualpartners, certification){
        const visualpartnersList = visualpartners.filter((visualpartner) => visualpartner.haveCertification == certification);
        return visualpartnersList.map((visualpartner) => visualpartner.email);
    }

    static getVisualpartnersByMoreThanCredits(visualpartners, credits){
        const visualpartnersList = visualpartners.filter((visualpartner) => visualpartner.credits > credits);
        return visualpartnersList;
    }

}

module.exports = VisualpartnerService;