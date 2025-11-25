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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfesorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProfesorService = class ProfesorService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createProfesorDto) {
        return this.prisma.profesor.create({
            data: createProfesorDto,
        });
    }
    async findAll() {
        return this.prisma.profesor.findMany({
            include: {
                carrera: true,
                materias: true,
                titulos: true,
            },
        });
    }
    async findOne(id) {
        return this.prisma.profesor.findUnique({
            where: { id },
            include: {
                carrera: true,
                materias: true,
                titulos: true,
            },
        });
    }
    async update(id, updateProfesorDto) {
        return this.prisma.profesor.update({
            where: { id },
            data: updateProfesorDto,
        });
    }
    async remove(id) {
        return this.prisma.profesor.delete({
            where: { id },
        });
    }
};
exports.ProfesorService = ProfesorService;
exports.ProfesorService = ProfesorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfesorService);
//# sourceMappingURL=profesor.service.js.map