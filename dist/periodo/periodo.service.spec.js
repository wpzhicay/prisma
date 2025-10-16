"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const periodo_service_1 = require("./periodo.service");
describe('PeriodoService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [periodo_service_1.PeriodoService],
        }).compile();
        service = module.get(periodo_service_1.PeriodoService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=periodo.service.spec.js.map