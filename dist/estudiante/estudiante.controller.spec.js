"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const estudiante_controller_1 = require("./estudiante.controller");
const estudiante_service_1 = require("./estudiante.service");
describe('EstudianteController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [estudiante_controller_1.EstudianteController],
            providers: [estudiante_service_1.EstudianteService],
        }).compile();
        controller = module.get(estudiante_controller_1.EstudianteController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=estudiante.controller.spec.js.map