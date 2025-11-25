import { ProfesorService } from './profesor.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
export declare class ProfesorController {
    private readonly profesorService;
    constructor(profesorService: ProfesorService);
    create(createProfesorDto: CreateProfesorDto): Promise<{
        nombre: string;
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
    findOne(id: string): Promise<({
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
    update(id: string, updateProfesorDto: UpdateProfesorDto): Promise<{
        nombre: string;
        correo: string;
        carrera_id: number;
        id: number;
    }>;
    remove(id: string): Promise<{
        nombre: string;
        correo: string;
        carrera_id: number;
        id: number;
    }>;
}
