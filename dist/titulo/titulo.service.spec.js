"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const titulo_service_1 = require("./titulo.service");
describe('TituloService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [titulo_service_1.TituloService],
        }).compile();
        service = module.get(titulo_service_1.TituloService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=titulo.service.spec.js.map