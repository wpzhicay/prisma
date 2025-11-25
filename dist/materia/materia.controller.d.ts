import { MateriaService } from './materia.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
export declare class MateriaController {
    private readonly materiaService;
    constructor(materiaService: MateriaService);
    create(createMateriaDto: CreateMateriaDto): Promise<{
        nombre: string;
        carrera_id: number;
        id: number;
        profesor_id: number;
        codigo: string;
    }>;
    findAll(): Promise<({
        carrera: {
            nombre: string;
            id: number;
            facultad: string;
        };
        profesor: {
            nombre: string;
            correo: string;
            carrera_id: number;
            id: number;
        };
        cursos: {
            id: number;
            materia_id: number;
            periodo_id: number;
            cupo: number;
            horario: string;
        }[];
    } & {
        nombre: string;
        carrera_id: number;
        id: number;
        profesor_id: number;
        codigo: string;
    })[]>;
    findOne(id: string): Promise<({
        carrera: {
            nombre: string;
            id: number;
            facultad: string;
        };
        profesor: {
            nombre: string;
            correo: string;
            carrera_id: number;
            id: number;
        };
        cursos: {
            id: number;
            materia_id: number;
            periodo_id: number;
            cupo: number;
            horario: string;
        }[];
    } & {
        nombre: string;
        carrera_id: number;
        id: number;
        profesor_id: number;
        codigo: string;
    }) | null>;
    update(id: string, updateMateriaDto: UpdateMateriaDto): Promise<{
        nombre: string;
        carrera_id: number;
        id: number;
        profesor_id: number;
        codigo: string;
    }>;
    remove(id: string): Promise<{
        nombre: string;
        carrera_id: number;
        id: number;
        profesor_id: number;
        codigo: string;
    }>;
}
