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
exports.PeriodoController = void 0;
const common_1 = require("@nestjs/common");
const periodo_service_1 = require("./periodo.service");
const create_periodo_dto_1 = require("./dto/create-periodo.dto");
const update_periodo_dto_1 = require("./dto/update-periodo.dto");
let PeriodoController = class PeriodoController {
    constructor(periodoService) {
        this.periodoService = periodoService;
    }
    create(createPeriodoDto) {
        return this.periodoService.create(createPeriodoDto);
    }
    findAll() {
        return this.periodoService.findAll();
    }
    findOne(id) {
        return this.periodoService.findOne(+id);
    }
    update(id, updatePeriodoDto) {
        return this.periodoService.update(+id, updatePeriodoDto);
    }
    remove(id) {
        return this.periodoService.remove(+id);
    }
};
exports.PeriodoController = PeriodoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_periodo_dto_1.CreatePeriodoDto]),
    __metadata("design:returntype", void 0)
], PeriodoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PeriodoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PeriodoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_periodo_dto_1.UpdatePeriodoDto]),
    __metadata("design:returntype", void 0)
], PeriodoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PeriodoController.prototype, "remove", null);
exports.PeriodoController = PeriodoController = __decorate([
    (0, common_1.Controller)('periodo'),
    __metadata("design:paramtypes", [periodo_service_1.PeriodoService])
], PeriodoController);
//# sourceMappingURL=periodo.controller.js.map