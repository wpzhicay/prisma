import { PrismaService } from '../prisma/prisma.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
export declare class EstudianteService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createEstudianteDto: CreateEstudianteDto): Promise<{
        nombre: string;
        apellido: string;
        fecha_nacimiento: Date;
        correo: string;
        carrera_id: number;
        id: number;
    }>;
    findAll(): Promise<({
        carrera: {
            nombre: string;
            id: number;
            facultad: string;
        };
    } & {
        nombre: string;
        apellido: string;
        fecha_nacimiento: Date;
        correo: string;
        carrera_id: number;
        id: number;
    })[]>;
    findOne(id: number): Promise<{
        carrera: {
            nombre: string;
            id: number;
            facultad: string;
        };
    } & {
        nombre: string;
        apellido: string;
        fecha_nacimiento: Date;
        correo: string;
        carrera_id: number;
        id: number;
    }>;
    update(id: number, updateEstudianteDto: UpdateEstudianteDto): Promise<{
        nombre: string;
        apellido: string;
        fecha_nacimiento: Date;
        correo: string;
        carrera_id: number;
        id: number;
    }>;
    remove(id: number): Promise<{
        nombre: string;
        apellido: string;
        fecha_nacimiento: Date;
        correo: string;
        carrera_id: number;
        id: number;
    }>;
}
