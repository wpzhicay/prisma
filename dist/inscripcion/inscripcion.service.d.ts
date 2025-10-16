import { CreateInscripcionDto } from './dto/create-inscripcion.dto';
import { UpdateInscripcionDto } from './dto/update-inscripcion.dto';
export declare class InscripcionService {
    create(createInscripcionDto: CreateInscripcionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateInscripcionDto: UpdateInscripcionDto): string;
    remove(id: number): string;
}
