import { CarreraService } from './carrera.service';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
export declare class CarreraController {
    private readonly carreraService;
    constructor(carreraService: CarreraService);
    create(createCarreraDto: CreateCarreraDto): Promise<{
        nombre: string;
        id: number;
        facultad: string;
    }>;
    findAll(): Promise<{
        nombre: string;
        id: number;
        facultad: string;
    }[]>;
    findOne(id: string): Promise<{
        nombre: string;
        id: number;
        facultad: string;
    }>;
    update(id: string, updateCarreraDto: UpdateCarreraDto): Promise<{
        nombre: string;
        id: number;
        facultad: string;
    }>;
    remove(id: string): Promise<{
        nombre: string;
        id: number;
        facultad: string;
    }>;
}
