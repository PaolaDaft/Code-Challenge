class VisualpartnerService {

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }

    static getExplorersByStack(explorers, stack){
        const explorersByStack = explorers.filter(explorer => explorer.stacks.join(", ").includes(stack));
        return explorersByStack;
    }

}
/**
Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500. */

module.exports = VisualpartnerService;