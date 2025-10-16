"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoService = void 0;
const common_1 = require("@nestjs/common");
let CursoService = class CursoService {
    create(createCursoDto) {
        return 'This action adds a new curso';
    }
    findAll() {
        return `This action returns all curso`;
    }
    findOne(id) {
        return `This action returns a #${id} curso`;
    }
    update(id, updateCursoDto) {
        return `This action updates a #${id} curso`;
    }
    remove(id) {
        return `This action removes a #${id} curso`;
    }
};
exports.CursoService = CursoService;
exports.CursoService = CursoService = __decorate([
    (0, common_1.Injectable)()
], CursoService);
//# sourceMappingURL=curso.service.js.map