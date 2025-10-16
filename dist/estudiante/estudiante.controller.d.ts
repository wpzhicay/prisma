import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
export declare class EstudianteController {
    private readonly estudianteService;
    constructor(estudianteService: EstudianteService);
    create(createEstudianteDto: CreateEstudianteDto): Promise<{
        nombre: string;
        correo: string;
        carrera_id: number;
        apellido: string;
        fecha_nacimiento: Date;
        id: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        carrera: {
            nombre: string;
            id: number;
            facultad: string;
        };
    } & {
        nombre: string;
        correo: string;
        carrera_id: number;
        apellido: string;
        fecha_nacimiento: Date;
        id: number;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__EstudianteClient<({
        carrera: {
            nombre: string;
            id: number;
            facultad: string;
        };
    } & {
        nombre: string;
        correo: string;
        carrera_id: number;
        apellido: string;
        fecha_nacimiento: Date;
        id: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateEstudianteDto: UpdateEstudianteDto): void;
    remove(id: string): void;
}
