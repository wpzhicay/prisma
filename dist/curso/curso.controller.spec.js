"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const curso_controller_1 = require("./curso.controller");
const curso_service_1 = require("./curso.service");
describe('CursoController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [curso_controller_1.CursoController],
            providers: [curso_service_1.CursoService],
        }).compile();
        controller = module.get(curso_controller_1.CursoController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=curso.controller.spec.js.map