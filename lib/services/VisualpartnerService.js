class VisualpartnerService {

    static getAllStudents(visualpartners){
        return visualpartners;
    }

    static getEmailsByCertification(visualpartners, certification){
        const visualpartnersList = visualpartners.filter((visualpartner) => visualpartner.haveCertification == certification);
        return visualpartnersList;
    }

    /*static getVisualpartnersByCredits(visualpartners, credits){
        const visualpartnersList = visualpartners.filter((visualpartner) => visualpartner.credits > credits);
        return visualpartnersList;
    }*/

}
/**
Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500. */

module.exports = VisualpartnerService;