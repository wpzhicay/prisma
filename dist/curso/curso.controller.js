"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoController = void 0;
const common_1 = require("@nestjs/common");
const curso_service_1 = require("./curso.service");
const create_curso_dto_1 = require("./dto/create-curso.dto");
const update_curso_dto_1 = require("./dto/update-curso.dto");
let CursoController = class CursoController {
    constructor(cursoService) {
        this.cursoService = cursoService;
    }
    create(createCursoDto) {
        return this.cursoService.create(createCursoDto);
    }
    findAll() {
        return this.cursoService.findAll();
    }
    findOne(id) {
        return this.cursoService.findOne(+id);
    }
    update(id, updateCursoDto) {
        return this.cursoService.update(+id, updateCursoDto);
    }
    remove(id) {
        return this.cursoService.remove(+id);
    }
};
exports.CursoController = CursoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_curso_dto_1.CreateCursoDto]),
    __metadata("design:returntype", void 0)
], CursoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CursoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CursoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_curso_dto_1.UpdateCursoDto]),
    __metadata("design:returntype", void 0)
], CursoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CursoController.prototype, "remove", null);
exports.CursoController = CursoController = __decorate([
    (0, common_1.Controller)('curso'),
    __metadata("design:paramtypes", [curso_service_1.CursoService])
], CursoController);
//# sourceMappingURL=curso.controller.js.map