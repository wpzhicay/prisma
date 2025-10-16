import { PrismaService } from '../prisma/prisma.service';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { Carrera } from '@prisma/client';
export declare class CarreraService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCarreraDto: CreateCarreraDto): Promise<Carrera>;
    findAll(): Promise<Carrera[]>;
    findOne(id: number): Promise<Carrera>;
    update(id: number, updateCarreraDto: UpdateCarreraDto): Promise<Carrera>;
    remove(id: number): Promise<Carrera>;
}
