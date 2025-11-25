import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
export declare class CursoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCursoDto: CreateCursoDto): Promise<{
        id: number;
        materia_id: number;
        periodo_id: number;
        cupo: number;
        horario: string;
    }>;
    findAll(): Promise<({
        materia: {
            nombre: string;
            carrera_id: number;
            id: number;
            profesor_id: number;
            codigo: string;
        };
        periodo: {
            nombre: string;
            id: number;
            fecha_inicio: Date;
            fecha_fin: Date;
        };
        inscripciones: {
            id: number;
            estudiante_id: number;
            curso_id: number;
            fecha_inscripcion: Date;
            estado: string;
        }[];
    } & {
        id: number;
        materia_id: number;
        periodo_id: number;
        cupo: number;
        horario: string;
    })[]>;
    findOne(id: number): Promise<({
        materia: {
            nombre: string;
            carrera_id: number;
            id: number;
            profesor_id: number;
            codigo: string;
        };
        periodo: {
            nombre: string;
            id: number;
            fecha_inicio: Date;
            fecha_fin: Date;
        };
        inscripciones: {
            id: number;
            estudiante_id: number;
            curso_id: number;
            fecha_inscripcion: Date;
            estado: string;
        }[];
    } & {
        id: number;
        materia_id: number;
        periodo_id: number;
        cupo: number;
        horario: string;
    }) | null>;
    update(id: number, updateCursoDto: UpdateCursoDto): Promise<{
        id: number;
        materia_id: number;
        periodo_id: number;
        cupo: number;
        horario: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        materia_id: number;
        periodo_id: number;
        cupo: number;
        horario: string;
    }>;
}
