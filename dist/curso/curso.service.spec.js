"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const curso_service_1 = require("./curso.service");
describe('CursoService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [curso_service_1.CursoService],
        }).compile();
        service = module.get(curso_service_1.CursoService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=curso.service.spec.js.map