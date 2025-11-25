import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
export declare class ProfesorService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProfesorDto: CreateProfesorDto): import(".prisma/client").Prisma.Prisma__ProfesorClient<{
        nombre: string;
        correo: string;
        carrera_id: number;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Promise<({
        carrera: {
            nombre: string;
            id: number;
            facultad: string;
        };
        materias: {
            nombre: string;
            carrera_id: number;
            id: number;
            profesor_id: number;
            codigo: string;
        }[];
        titulos: {
            nombre: string;
            id: number;
            profesor_id: number;
        }[];
    } & {
        nombre: string;
        correo: string;
        carrera_id: number;
        id: number;
    })[]>;
    findOne(id: number): Promise<({
        carrera: {
            nombre: string;
            id: number;
            facultad: string;
        };
        materias: {
            nombre: string;
            carrera_id: number;
            id: number;
            profesor_id: number;
            codigo: string;
        }[];
        titulos: {
            nombre: string;
            id: number;
            profesor_id: number;
        }[];
    } & {
        nombre: string;
        correo: string;
        carrera_id: number;
        id: number;
    }) | null>;
    update(id: number, updateProfesorDto: UpdateProfesorDto): Promise<{
        nombre: string;
        correo: string;
        carrera_id: number;
        id: number;
    }>;
    remove(id: number): Promise<{
        nombre: string;
        correo: string;
        carrera_id: number;
        id: number;
    }>;
}
