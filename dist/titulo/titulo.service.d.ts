import { CreateTituloDto } from './dto/create-titulo.dto';
import { UpdateTituloDto } from './dto/update-titulo.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class TituloService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTituloDto: CreateTituloDto): Promise<{
        nombre: string;
        id: number;
        profesor_id: number;
    }>;
    findAll(page?: number, limit?: number): Promise<({
        profesor: {
            nombre: string;
            correo: string;
            carrera_id: number;
            id: number;
        };
    } & {
        nombre: string;
        id: number;
        profesor_id: number;
    })[]>;
    findOne(id: number): Promise<{
        profesor: {
            nombre: string;
            correo: string;
            carrera_id: number;
            id: number;
        };
    } & {
        nombre: string;
        id: number;
        profesor_id: number;
    }>;
    update(id: number, updateTituloDto: UpdateTituloDto): Promise<{
        nombre: string;
        id: number;
        profesor_id: number;
    }>;
    remove(id: number): Promise<{
        nombre: string;
        id: number;
        profesor_id: number;
    }>;
}
