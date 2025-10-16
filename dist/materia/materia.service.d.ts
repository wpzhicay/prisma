import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
export declare class MateriaService {
    create(createMateriaDto: CreateMateriaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMateriaDto: UpdateMateriaDto): string;
    remove(id: number): string;
}
