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
exports.TituloService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TituloService = class TituloService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTituloDto) {
        const profesor = await this.prisma.profesor.findUnique({
            where: { id: createTituloDto.profesor_id },
        });
        if (!profesor) {
            throw new common_1.NotFoundException(`Profesor con ID #${createTituloDto.profesor_id} no existe`);
        }
        return this.prisma.titulo.create({
            data: createTituloDto,
        });
    }
    async findAll(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        return this.prisma.titulo.findMany({
            skip,
            take: limit,
            include: {
                profesor: true,
            },
        });
    }
    async findOne(id) {
        const titulo = await this.prisma.titulo.findUnique({
            where: { id },
            include: {
                profesor: true,
            },
        });
        if (!titulo) {
            throw new common_1.NotFoundException(`Título con ID #${id} no encontrado`);
        }
        return titulo;
    }
    async update(id, updateTituloDto) {
        await this.findOne(id);
        if (updateTituloDto.profesor_id) {
            const profesor = await this.prisma.profesor.findUnique({
                where: { id: updateTituloDto.profesor_id },
            });
            if (!profesor) {
                throw new common_1.NotFoundException(`Profesor con ID #${updateTituloDto.profesor_id} no existe`);
            }
        }
        return this.prisma.titulo.update({
            where: { id },
            data: updateTituloDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.titulo.delete({
            where: { id },
        });
    }
};
exports.TituloService = TituloService;
exports.TituloService = TituloService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TituloService);
//# sourceMappingURL=titulo.service.js.map