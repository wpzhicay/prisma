"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const estudiante_service_1 = require("./estudiante.service");
describe('EstudianteService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [estudiante_service_1.EstudianteService],
        }).compile();
        service = module.get(estudiante_service_1.EstudianteService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=estudiante.service.spec.js.map