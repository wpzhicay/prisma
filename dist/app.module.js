"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const estudiante_module_1 = require("./estudiante/estudiante.module");
const carrera_module_1 = require("./carrera/carrera.module");
const profesor_module_1 = require("./profesor/profesor.module");
const titulo_module_1 = require("./titulo/titulo.module");
const materia_module_1 = require("./materia/materia.module");
const curso_module_1 = require("./curso/curso.module");
const inscripcion_module_1 = require("./inscripcion/inscripcion.module");
const prisma_module_1 = require("./prisma/prisma.module");
const app_service_1 = require("./app.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [estudiante_module_1.EstudianteModule, carrera_module_1.CarreraModule, profesor_module_1.ProfesorModule, titulo_module_1.TituloModule, materia_module_1.MateriaModule, curso_module_1.CursoModule, inscripcion_module_1.InscripcionModule, prisma_module_1.PrismaModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map