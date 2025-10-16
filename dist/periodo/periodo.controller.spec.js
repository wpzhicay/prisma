"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const periodo_controller_1 = require("./periodo.controller");
const periodo_service_1 = require("./periodo.service");
describe('PeriodoController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [periodo_controller_1.PeriodoController],
            providers: [periodo_service_1.PeriodoService],
        }).compile();
        controller = module.get(periodo_controller_1.PeriodoController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=periodo.controller.spec.js.map