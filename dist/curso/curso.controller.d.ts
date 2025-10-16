import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
export declare class CursoController {
    private readonly cursoService;
    constructor(cursoService: CursoService);
    create(createCursoDto: CreateCursoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCursoDto: UpdateCursoDto): string;
    remove(id: string): string;
}
