"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const profesor_controller_1 = require("./profesor.controller");
const profesor_service_1 = require("./profesor.service");
describe('ProfesorController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [profesor_controller_1.ProfesorController],
            providers: [profesor_service_1.ProfesorService],
        }).compile();
        controller = module.get(profesor_controller_1.ProfesorController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=profesor.controller.spec.js.map