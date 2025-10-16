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
exports.InscripcionController = void 0;
const common_1 = require("@nestjs/common");
const inscripcion_service_1 = require("./inscripcion.service");
const create_inscripcion_dto_1 = require("./dto/create-inscripcion.dto");
const update_inscripcion_dto_1 = require("./dto/update-inscripcion.dto");
let InscripcionController = class InscripcionController {
    constructor(inscripcionService) {
        this.inscripcionService = inscripcionService;
    }
    create(createInscripcionDto) {
        return this.inscripcionService.create(createInscripcionDto);
    }
    findAll() {
        return this.inscripcionService.findAll();
    }
    findOne(id) {
        return this.inscripcionService.findOne(+id);
    }
    update(id, updateInscripcionDto) {
        return this.inscripcionService.update(+id, updateInscripcionDto);
    }
    remove(id) {
        return this.inscripcionService.remove(+id);
    }
};
exports.InscripcionController = InscripcionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inscripcion_dto_1.CreateInscripcionDto]),
    __metadata("design:returntype", void 0)
], InscripcionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InscripcionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InscripcionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_inscripcion_dto_1.UpdateInscripcionDto]),
    __metadata("design:returntype", void 0)
], InscripcionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InscripcionController.prototype, "remove", null);
exports.InscripcionController = InscripcionController = __decorate([
    (0, common_1.Controller)('inscripcion'),
    __metadata("design:paramtypes", [inscripcion_service_1.InscripcionService])
], InscripcionController);
//# sourceMappingURL=inscripcion.controller.js.map