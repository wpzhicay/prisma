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
exports.CarreraService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CarreraService = class CarreraService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCarreraDto) {
        return this.prisma.carrera.create({
            data: createCarreraDto,
        });
    }
    async findAll() {
        return this.prisma.carrera.findMany();
    }
    async findOne(id) {
        const carrera = await this.prisma.carrera.findUnique({
            where: { id },
        });
        if (!carrera)
            throw new common_1.NotFoundException(`Carrera con ID ${id} no encontrada`);
        return carrera;
    }
    async update(id, updateCarreraDto) {
        return this.prisma.carrera.update({
            where: { id },
            data: updateCarreraDto,
        });
    }
    async remove(id) {
        return this.prisma.carrera.delete({
            where: { id },
        });
    }
};
exports.CarreraService = CarreraService;
exports.CarreraService = CarreraService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarreraService);
//# sourceMappingURL=carrera.service.js.map