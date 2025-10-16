"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeriodoService = void 0;
const common_1 = require("@nestjs/common");
let PeriodoService = class PeriodoService {
    create(createPeriodoDto) {
        return 'This action adds a new periodo';
    }
    findAll() {
        return `This action returns all periodo`;
    }
    findOne(id) {
        return `This action returns a #${id} periodo`;
    }
    update(id, updatePeriodoDto) {
        return `This action updates a #${id} periodo`;
    }
    remove(id) {
        return `This action removes a #${id} periodo`;
    }
};
exports.PeriodoService = PeriodoService;
exports.PeriodoService = PeriodoService = __decorate([
    (0, common_1.Injectable)()
], PeriodoService);
//# sourceMappingURL=periodo.service.js.map