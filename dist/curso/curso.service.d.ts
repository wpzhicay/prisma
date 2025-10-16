import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
export declare class CursoService {
    create(createCursoDto: CreateCursoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCursoDto: UpdateCursoDto): string;
    remove(id: number): string;
}
