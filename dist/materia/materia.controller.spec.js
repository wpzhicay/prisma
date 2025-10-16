"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const materia_controller_1 = require("./materia.controller");
const materia_service_1 = require("./materia.service");
describe('MateriaController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [materia_controller_1.MateriaController],
            providers: [materia_service_1.MateriaService],
        }).compile();
        controller = module.get(materia_controller_1.MateriaController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=materia.controller.spec.js.map