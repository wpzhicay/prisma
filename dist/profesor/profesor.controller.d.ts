import { ProfesorService } from './profesor.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
export declare class ProfesorController {
    private readonly profesorService;
    constructor(profesorService: ProfesorService);
    create(createProfesorDto: CreateProfesorDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProfesorDto: UpdateProfesorDto): string;
    remove(id: string): string;
}
