import { InscripcionService } from './inscripcion.service';
import { CreateInscripcionDto } from './dto/create-inscripcion.dto';
import { UpdateInscripcionDto } from './dto/update-inscripcion.dto';
export declare class InscripcionController {
    private readonly inscripcionService;
    constructor(inscripcionService: InscripcionService);
    create(createInscripcionDto: CreateInscripcionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateInscripcionDto: UpdateInscripcionDto): string;
    remove(id: string): string;
}
