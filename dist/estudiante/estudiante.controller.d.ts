import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
export declare class EstudianteController {
    private readonly estudianteService;
    constructor(estudianteService: EstudianteService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateEstudianteDto: UpdateEstudianteDto): Promise<{
        nombre: string;
        apellido: string;
        fecha_nacimiento: Date;
        correo: string;
        carrera_id: number;
        id: number;
    }>;
    remove(id: string): Promise<{
        nombre: string;
        apellido: string;
        fecha_nacimiento: Date;
        correo: string;
        carrera_id: number;
        id: number;
    }>;
}
