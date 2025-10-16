"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const carrera_service_1 = require("./carrera.service");
describe('CarreraService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [carrera_service_1.CarreraService],
        }).compile();
        service = module.get(carrera_service_1.CarreraService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=carrera.service.spec.js.map