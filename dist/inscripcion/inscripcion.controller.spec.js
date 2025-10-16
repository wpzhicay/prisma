"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const inscripcion_controller_1 = require("./inscripcion.controller");
const inscripcion_service_1 = require("./inscripcion.service");
describe('InscripcionController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [inscripcion_controller_1.InscripcionController],
            providers: [inscripcion_service_1.InscripcionService],
        }).compile();
        controller = module.get(inscripcion_controller_1.InscripcionController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=inscripcion.controller.spec.js.map