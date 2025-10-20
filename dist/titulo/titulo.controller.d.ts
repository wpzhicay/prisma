import { TituloService } from './titulo.service';
import { CreateTituloDto } from './dto/create-titulo.dto';
import { UpdateTituloDto } from './dto/update-titulo.dto';
export declare class TituloController {
    private readonly tituloService;
    constructor(tituloService: TituloService);
    create(createTituloDto: CreateTituloDto): Promise<{
        nombre: string;
        id: number;
        profesor_id: number;
    }>;
    findAll(): Promise<({
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
    findOne(id: string): Promise<{
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
    update(id: string, updateTituloDto: UpdateTituloDto): Promise<{
        nombre: string;
        id: number;
        profesor_id: number;
    }>;
    remove(id: string): Promise<{
        nombre: string;
        id: number;
        profesor_id: number;
    }>;
}
