"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let EstudianteService = class EstudianteService {
    remove(arg0) {
        throw new Error('Method not implemented.');
    }
    update(arg0, updateEstudianteDto) {
        throw new Error('Method not implemented.');
    }
    async create(createEstudianteDto) {
        return prisma.estudiante.create({
            data: {
                nombre: createEstudianteDto.nombre,
                apellido: createEstudianteDto.apellido,
                correo: createEstudianteDto.correo,
                fecha_nacimiento: new Date(createEstudianteDto.fecha_nacimiento),
                carrera_id: createEstudianteDto.carrera_id,
            },
        });
    }
    findAll() {
        return prisma.estudiante.findMany({
            include: { carrera: true },
        });
    }
    findOne(id) {
        return prisma.estudiante.findUnique({
            where: { id },
            include: { carrera: true },
        });
    }
};
exports.EstudianteService = EstudianteService;
exports.EstudianteService = EstudianteService = __decorate([
    (0, common_1.Injectable)()
], EstudianteService);
//# sourceMappingURL=estudiante.service.js.map