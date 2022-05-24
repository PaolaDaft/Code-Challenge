const VisualpartnerService = require("./../../lib/services/VisualpartnerService");

describe("Tests para VisualpartnerService", () => {
    const visualpartners = [
        {
            "id": "6264d5d89f1df827eb84bb23",
            "name": "Warren",
            "email": "Todd@visualpartnership.xyz",
            "credits": 508,
            "haveCertification": true
        },
        {
            "id": "6264d5d85cf81c496446b67f",
            "name": "Lucinda",
            "email": "Sexton@visualpartnership.xyz",
            "credits": 677,
            "haveCertification": true
        },
        {
            "id": "6264d5d8cda17de0d2e9f236",
            "name": "Fuentes",
            "email": "Sharlene@visualpartnership.xyz",
            "credits": 210,
            "haveCertification": true
        },
        {
            "id": "6264d5d8878a117a9c57c5c4",
            "name": "Claudia",
            "email": "Howell@visualpartnership.xyz",
            "credits": 227,
            "haveCertification": true
        },
        {
            "id": "6264d5d8dd1a0be4e249c662",
            "name": "Phillips",
            "email": "Camacho@visualpartnership.xyz",
            "credits": 973,
            "haveCertification": false
        },
        {
            "id": "6264d5d8dd01ab97ddedbba5",
            "name": "Taylor",
            "email": "Haynes@visualpartnership.xyz",
            "credits": 652,
            "haveCertification": true
        },
        {
            "id": "6264d5d89d03e25451f124e5",
            "name": "Mindy",
            "email": "Alfreda@visualpartnership.xyz",
            "credits": 830,
            "haveCertification": false
        }
    ];
    test("Requerimiento 1: Consultar todos los estudiantes con todos sus campos.", () => {
        const allVisualpartners = VisualpartnerService.getAllStudents(visualpartners);

        expect(allVisualpartners.length).toBe(7);
    });

    test("Requerimiento 2: Consultar los emails de todos los estudiantes que tengan certificación haveCertification.", () => {
        const visualpartnersWithCertification = VisualpartnerService.getEmailsByCertification(visualpartners, true);

        expect(visualpartnersWithCertification.length).toBe(5);
    });

    test("Requerimiento 3: Consultar todos los estudiantes que tengan credits mayor a 500", () => {
        const explorersListWithJsStack = VisualpartnerService.getVisualpartnersByMoreThanCredits(visualpartners, 500);
        
        expect(explorersListWithJsStack).toHaveLength(5);
    });

});
