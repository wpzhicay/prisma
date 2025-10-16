"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const materia_service_1 = require("./materia.service");
describe('MateriaService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [materia_service_1.MateriaService],
        }).compile();
        service = module.get(materia_service_1.MateriaService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=materia.service.spec.js.map