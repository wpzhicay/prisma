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
exports.TituloController = void 0;
const common_1 = require("@nestjs/common");
const titulo_service_1 = require("./titulo.service");
const create_titulo_dto_1 = require("./dto/create-titulo.dto");
const update_titulo_dto_1 = require("./dto/update-titulo.dto");
let TituloController = class TituloController {
    constructor(tituloService) {
        this.tituloService = tituloService;
    }
    create(createTituloDto) {
        return this.tituloService.create(createTituloDto);
    }
    findAll() {
        return this.tituloService.findAll();
    }
    findOne(id) {
        return this.tituloService.findOne(+id);
    }
    update(id, updateTituloDto) {
        return this.tituloService.update(+id, updateTituloDto);
    }
    remove(id) {
        return this.tituloService.remove(+id);
    }
};
exports.TituloController = TituloController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_titulo_dto_1.CreateTituloDto]),
    __metadata("design:returntype", void 0)
], TituloController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TituloController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TituloController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_titulo_dto_1.UpdateTituloDto]),
    __metadata("design:returntype", void 0)
], TituloController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TituloController.prototype, "remove", null);
exports.TituloController = TituloController = __decorate([
    (0, common_1.Controller)('titulo'),
    __metadata("design:paramtypes", [titulo_service_1.TituloService])
], TituloController);
//# sourceMappingURL=titulo.controller.js.map