"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const inscripcion_service_1 = require("./inscripcion.service");
describe('InscripcionService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [inscripcion_service_1.InscripcionService],
        }).compile();
        service = module.get(inscripcion_service_1.InscripcionService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=inscripcion.service.spec.js.map