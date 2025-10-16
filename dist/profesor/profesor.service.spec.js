"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const profesor_service_1 = require("./profesor.service");
describe('ProfesorService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [profesor_service_1.ProfesorService],
        }).compile();
        service = module.get(profesor_service_1.ProfesorService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=profesor.service.spec.js.map