"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const titulo_controller_1 = require("./titulo.controller");
const titulo_service_1 = require("./titulo.service");
describe('TituloController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [titulo_controller_1.TituloController],
            providers: [titulo_service_1.TituloService],
        }).compile();
        controller = module.get(titulo_controller_1.TituloController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=titulo.controller.spec.js.map