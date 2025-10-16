"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const carrera_controller_1 = require("./carrera.controller");
const carrera_service_1 = require("./carrera.service");
describe('CarreraController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [carrera_controller_1.CarreraController],
            providers: [carrera_service_1.CarreraService],
        }).compile();
        controller = module.get(carrera_controller_1.CarreraController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=carrera.controller.spec.js.map