"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteModule = void 0;
const common_1 = require("@nestjs/common");
const estudiante_controller_1 = require("./estudiante.controller");
const estudiante_service_1 = require("./estudiante.service");
const prisma_service_1 = require("../prisma/prisma.service");
let EstudianteModule = class EstudianteModule {
};
exports.EstudianteModule = EstudianteModule;
exports.EstudianteModule = EstudianteModule = __decorate([
    (0, common_1.Module)({
        controllers: [estudiante_controller_1.EstudianteController],
        providers: [estudiante_service_1.EstudianteService, prisma_service_1.PrismaService],
    })
], EstudianteModule);
//# sourceMappingURL=estudiante.module.js.map