import { MateriaService } from './materia.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
export declare class MateriaController {
    private readonly materiaService;
    constructor(materiaService: MateriaService);
    create(createMateriaDto: CreateMateriaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMateriaDto: UpdateMateriaDto): string;
    remove(id: string): string;
}
